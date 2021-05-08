import React, {Component} from "react";
import { TweenLite, Power2} from "gsap/TweenMax";
import MyLink from './utils/navigation';
import axios from 'axios'



class Form extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			form: {},
			validateForm:{},
			activeFormFields:{},
			currentSlide: 0,
			maxSlide: 0,
			successForm: false,
			sendMessage: "",

			popup: "opened",
		}

		this.moving= false;
		this.autofocus = true;
		if(navigator && navigator.userAgent){
			let ua = navigator.userAgent.toLowerCase(); 
			if (ua.indexOf('safari') != -1) { 
				if (ua.indexOf('chrome') < 0) { // Safari
					this.autofocus = false;
				}
			}
		}

		this.emailExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		this.phoneExpression = /^\+?[0-9,' ',-]{0,16}$/;

		this.formRef = React.createRef();
		this.formWrapperRef = React.createRef();
		this.successRef = React.createRef();
		this.formMessage = React.createRef();

		this.autoExpand = this.autoExpand.bind(this);
		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
		this.onChangeRadio = this.onChangeRadio.bind(this);
		this.onChangeNDA = this.onChangeNDA.bind(this);

		this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
		this.sendForm = this.sendForm.bind(this);
		this.validateForm = this.validateForm.bind(this);
		this.goToSlide = this.goToSlide.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
		this.prevSlide = this.prevSlide.bind(this);

		this.closePopup = this.closePopup.bind(this);
		this.openPopup = this.openPopup.bind(this);

		this.sendMail = this.sendMail.bind(this);
	}

	
	autoExpand(event){
		let field = event.currentTarget;
		field.style.height = 'inherit';
		let computed = window.getComputedStyle(field);
		let height = parseInt(computed.getPropertyValue('border-top-width'), 10)
				 + parseInt(computed.getPropertyValue('padding-top'), 10)
				 + field.scrollHeight
				 + parseInt(computed.getPropertyValue('padding-bottom'), 10)
				 + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

		field.style.height = height + 'px';
	}

	onFocus(event){
		let name = event.target.name;
		if(name === undefined){
			name = event.target.querySelector(".input").name;
		}
		let activeFormFields = this.state.activeFormFields;
		activeFormFields[name] = true;
		this.setState({activeFormFields: activeFormFields});
	}
	onBlur(event){
		/*
		List state value and check value length !== 0, dont remove active
		*/
		let activeFormFields = this.state.activeFormFields;
		for (let field in this.state.form){
			if(this.state.form[field].length === 0){
				this.state.activeFormFields[field] = false;
			}else{
				this.state.activeFormFields[field] = true;
			}
		}
		this.setState({activeFormFields: activeFormFields});
	}

	onChangeInput(event){
		let form = this.state.form;
		form[event.target.name] =  event.target.value;
		this.setState({form: form});
	}

	onChangeRadio(event){
		this.onChangeInput(event);
		this.nextSlide();
	}
	onChangeNDA(event){
		this.onChangeInput(event);
		if(event.target.value === "No"){
			let form = this.state.form;
			form[event.target.name] =  "";
			form["ndaName"] = "";			
			this.setState({form: form}, ()=>{
				this.nextSlide();
			});
		}
	}

	onChangeCheckbox(event){
		let form = this.state.form;
		let index = this.state.form.services.indexOf(event.target.value);
		if( index >= 0 ){
			form[event.target.name].splice(index,1);
		}else{
			form[event.target.name].push(event.target.value);
		}
		this.setState({form: form});		
	}

	 sendMail = async (data) => {
		try {
			const response = await fetch({
				url: 'http://127.0.0.1:4000/api/send-mail',
				method: 'POST',
				body: JSON.stringify(data), 
			});
			return await response.json();
		} catch (error) {
			return error;
		}

	}
/* 	handleSubmit = async (e)   => {
        e.preventDefault();
        const { firstname, phone, services, email, message, budget, about, timeline, emailTo } = this.state.form
        
      const dataToSubmit ={
			firstname: firstname,
            phone: phone, 
			email: email,
			services: services,
			budget: budget,
			timeline: timeline,
			about: about,
            message: message,
            subject: 'Contacto pagina web',
            emailTo: emailTo,
        } 

        const form = await axios.post("http://127.0.0.1:4000/api/send-mail" , dataToSubmit)
		return form
    } */

	sendForm(){
		this.formMessage.current.classList.remove("error");
		
		if(this.validateForm()){
			this.formMessage.current.classList.add("blink");
			this.setState({sendMessage: "Sending..."});

			this.sendMail(this.state.form).then((response)=>{
				this.formMessage.current.classList.remove("blink");
				console.log(response, "estatus");
				if(response.status == 'ok'){
					if(window.dataLayer) window.dataLayer.push({'event':'contactForm'});//Tag Manager
					let thanksLink = this.successRef.current.querySelector(".thanks-link");
					if(  thanksLink ){
						thanksLink.click();
					} 
				}else{
					this.formMessage.current.classList.add("error");
					this.setState({sendMessage: "Ocurrió algún error. Por favor, inténtelo de nuevo más tarder."});
				}
			}).catch((response)=>{
				console.log(response);
				this.formMessage.current.classList.remove("blink");
				this.formMessage.current.classList.add("error");
				this.setState({sendMessage: "Ocurrió algún error. Por favor, inténtelo de nuevo más tarde...."});
			});
		}else{
			this.formMessage.current.classList.add("error");
			this.setState({sendMessage: "Ocurrió algún error. Por favor, inténtelo de nuevo más tarde......"});
		}
	}
	
	validateForm(){
		let form = this.state.form;
		let validateForm = this.state.validateForm;
		let valid= true;
		for (let item in form) {
			if(form[item].length === 0){
				valid= false;
				validateForm[item] = false;
			}else{
				validateForm[item] = true;
			}
		}
		this.setState({validateForm})
		return valid;
	}

	validateInput(input){
		let field = this.state.form[input.name];
		let type = input.type;
		let valid = true;
		let validateForm = this.state.validateForm;
		if(input.name === "nda"){
			type = "nda";
		}
		switch (type) {
			case "text":
			case "checkbox":
			case "radio":
			case "textarea":
				if(field.length === 0){
					valid = false;
				}
				break;
			case "email":
				if(field.length === 0 || !this.emailExpression.test(field)){					
					valid = false;
				}
				break;
			case "tel":
				if(field.length === 0 || !this.phoneExpression.test(field)){					
					valid = false;
				}
				break;
			case "nda":
				if(field === "Yes" && this.state.form.ndaFile === ""){					
					valid = false;
				}
				break;
			default:
				// statements_def
				break;
		}
		validateForm[input.name] = valid;
		this.setState({validateForm})
		if(!valid){
			input.focus();
		}

		return valid;
	}

	nextSlide(){
		let input = this.formRef.current.querySelector(".input");
		if(this.validateInput(input)){
			if(this.state.currentSlide < this.state.maxSlide){
				this.goToSlide(this.state.currentSlide+1);
			}
		}
		
	}
	prevSlide(){
		this.goToSlide(this.state.currentSlide-1);
	}

	goToSlide(numSlide){
		if(!this.moving){
			this.moving= true;
			TweenLite.to(this.formRef.current, 0.8, {opacity:0, x: -20, ease:Power2.easeInOut, onComplete:()=>{
				this.setState({currentSlide: numSlide}, ()=>{
					TweenLite.set(this.formRef.current, {x: 20});
					TweenLite.to(this.formRef.current, 0.8, {opacity:1, x:0, ease:Power2.easeInOut, clearProps: "opacity", onComplete:()=>{this.moving=false}});
				});
			}})
			// this.setState({currentSlide: numSlide});
		}
	}


	openPopup(){
		// window.dispatchEvent(new Event('openMenuHeader'));
		// setTimeout(()=>{
		// 	if(window.location.href.indexOf("about") > 0){
		// 		document.body.querySelector(".website-app").classList.remove("page-black");
		// 		document.body.classList.remove("page-black");
		// 	}
		// 	window.dispatchEvent(new Event('disableScroll'));
		// 	this.setState({popup: "opened"});
		// }, 800);
	}

	closePopup(){
		// window.dispatchEvent(new Event('openMenuHeader'));
		// setTimeout(()=>{
		// 	if(window.location.href.indexOf("about") > 0){
		// 		document.body.querySelector(".website-app").classList.add("page-black");
		// 		document.body.classList.add("page-black");
		// 	}
		// 	window.dispatchEvent(new Event('enableScroll'));
		// 	this.setState({popup: "closed"});
		// }, 800);
		
	}


	render(){
		if(this.state.popup === "closed"){return null}
		let showPrev = true;
		let showNext = true;
		if(this.state.currentSlide <= 0){
			showPrev = false;
		}
		if(this.state.currentSlide >= this.state.maxSlide){
			showNext = false;
		}

		let formSlide = this.getFormSlide();
		return(
			<div className={"module contact-form-popup-container no-margin "+((this.state.popup==="closed")?"closed":"")} ref={this.popupRef}>
				<div className="contact-popup-body">
					<form className="contact-form-container module no-margin" onSubmit={this.handleSubmit}/* onSubmit={(event)=>{
						event.preventDefault();
						if(showNext){
							this.nextSlide();
						}else{
							this.sendForm();
						}
					}} */>
						
						<div className="contact-form-wrapper" ref={this.formWrapperRef}>
							<div className="contact-title p font-h1">{this.props.title}</div>
							<div className="contact-form-content js-animate">
								<div className="form-slider" ref={this.formRef}>
									<div className="form-slide">
										{formSlide[this.state.currentSlide]}
									</div>
								</div>
								<div className="form-buttons-container" ref={this.successRef}>
									<p className={"form-button font-p2 font-white custom-cursor "+((showPrev)?"":" disabled")} onClick={this.prevSlide}>Atras</p>
									{(showNext)?
										<p className={"form-button font-p2 font-white custom-cursor "+((showNext)?"":" disabled")} onClick={this.nextSlide}>Siguiente</p>
									:
										<React.Fragment>
											<button type="submit" className="form-button font-p2 font-white custom-cursor">Enviar</button>
	        	  							<MyLink  to={this.props.thanksLink} className="hidden thanks-link"></MyLink>

										</React.Fragment>
									
									}
									<p className="font-p2 form-message active" ref={this.formMessage}>{this.state.sendMessage}</p>
								</div>
							</div>
						</div>
						
					</form>
				</div>
			</div>
		)
	}


}


export default Form;

import React, {Component} from "react";
import HubSpot from '../utils/hubspot'

class Emailform extends Component {
	
	constructor(props){
		super(props)
		this.state  = {
			// page: false,
			email: '',
			errorMessage:'',

		}
		
		this.handleInput = this.handleInput.bind(this);
		this.sendForm = this.sendForm.bind(this);
		this.validateEmail = this.validateEmail.bind(this);

		this.sendSvg = <svg enableBackground="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect fill="none" height={50} width={50} /><polygon points="15,2.75 12.914,4.836 33.078,25 12.914,45.164 15,47.25 37.25,25 " /></svg>;
	}
	
	componentDidMount(){
		// GeneralAnimations.prepareGeneralAnimations();
	}

	handleInput(event){
		// this.validateEmail(event.currentTarget.value);
		this.setState({"errorMessage": ""});
		this.setState({"email":event.currentTarget.value});
	}

	sendForm(){
		if(this.validateEmail(this.state.email)){
			this.setState({"errorMessage": "Sending..."});
			HubSpot.addSubcriber(this.state.email).then((response)=>{
				if(response.status == 'ok'){
					this.setState({"errorMessage": "Success"});
				}else{
					this.setState({"errorMessage": response.message});
				}
			})
		}else{
			this.setState({"errorMessage": "Something went wrong. Please try again."});
		}
	}

	validateEmail(field){
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (field.length > 0) {
			if(re.test(field)){
				return true; 	
			}else if(!re.test(field)){
				
				return false;
			}
		}else{
			return false;
		}
	}



	render(){
		let activeErrorMessage = "";
		let activeSendClass = "";
		if(this.state.errorMessage !== ""){
			activeErrorMessage = " active";
		}
		if(this.state.email.length > 0){
			activeSendClass = " active";
		}

		return(
	       <form className="form-container">
	       		<label htmlFor="subscribe-email" className="font-p font-white">Subscribe to our newsletter</label>
				<div className="input-type">
					<input id="subscribe-email" className="input font-p font-white custom-cursor" placeholder="Email" name="email" type="email" required value={this.state.email} onChange={this.handleInput} />
					<div className={"send-container "+activeSendClass} onClick={this.sendForm}>{this.sendSvg}</div>
					<p className={"invalid-text font-p2 font-gray "+activeErrorMessage}>{this.state.errorMessage}</p>
				</div>
	       </form>
		);
	}
}


export default Emailform;

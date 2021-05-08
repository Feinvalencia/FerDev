import React, {Component} from "react";

import HubSpot from '../utils/hubspot'

import Form from '../Form';


class ContactForm extends Form {
	
	constructor(props){
		super(props);
		this.state = {
			form: {
				firstname: "",
				email: "",
				phone: "",
				about: "",
				budget: "",
				timeline: "",
				services: "",
				needNda:"",
				hearUs:"",
			},
			validateForm:{
				firstname: true,
				email: true,
				phone: true,
				about: true, 
				budget: true,
				timeline: true,
				services: true,
				needNda: true,
				hearUs: true,
			},
			activeFormFields:{
				firstname: false,
				email: false,
				phone: false,
				about: false,
				budget: false,
				timeline: false,
				services: false,
				needNda: false,
				hearUs: false,
			},
			currentSlide: 0,
			maxSlide: this.getFormSlide().length - 1,
			successForm: false,
			sendMessage: "",

			popup: "opened",
		}

		this.sendFunction = HubSpot.sendContact;
	}

	getFormSlide(){
		let i = 0;
		return [
					<div key={i++} className="form-row">
						<div className={"form-field "+((this.state.validateForm.firstname)?"":"error")+((this.state.activeFormFields.firstname)?" active":"")} onFocus={this.onFocus} onBlur={this.onBlur}>
							<label className="label-animate font-h3" htmlFor="contact-form-name">Ingresa tu Nombre</label>
							<input autoFocus={this.autofocus} maxLength={50} id="contact-form-name" className="input font-h3 custom-cursor" type="text" name="firstname" value={this.state.form.firstname} onChange={this.onChangeInput}/>
							<p className="field-message font-p2 font-red">Requerido</p>
						</div>
					</div>
				,

					<div key={i++} className="form-row">
						<div className={"form-field "+((this.state.validateForm.email)?"":"error")+((this.state.activeFormFields.email)?" active":"")} onFocus={this.onFocus} onBlur={this.onBlur}>
							<label className="label-animate font-h3" htmlFor="contact-form-email">Correo electrónico</label>
							<input autoFocus={this.autofocus} maxLength={50} id="contact-form-email" className="input font-h3 custom-cursor" type="email" name="email" value={this.state.form.email} onChange={this.onChangeInput}/>
							<p className="field-message font-p2 font-red">Invalid</p>
						</div>
					</div>
				,

					<div key={i++} className="form-row">
						<div className={"form-field "+((this.state.validateForm.phone)?"":"error")+((this.state.activeFormFields.phone)?" active":"")} onFocus={this.onFocus} onBlur={this.onBlur}>
							<label className="label-animate font-h3" htmlFor="contact-form-email">Numero de telefono</label>
							<input autoFocus={this.autofocus} maxLength={50} id="contact-form-email" className="input font-h3 custom-cursor" type="tel" name="phone" value={this.state.form.phone} onChange={this.onChangeInput}/>
							<p className="field-message font-p2 font-red">Invalid</p>
						</div>
					</div>
				,

					<div key={i++} className={"form-field field-checkbox "+((this.state.validateForm.services)?"":"error")+((this.state.activeFormFields.services)?" active":"")} >
						<p className="font-h3 checkbox-title font-gray">Elige tu servicio</p>
						<div className="checkbox-list block">
							{["Nuevo Proyecto", "Mejorar un producto existente"].map((item, i)=>(
								<div className="checkbox-item" key={i}>
									<input id={"checkbox-a-"+i} className="checkbox input" type="radio" name="services" value={item} checked={this.state.form.services===item} onChange={this.onChangeRadio}/>
									<label htmlFor={"checkbox-a-"+i} className="font-h3 custom-cursor">{item}</label>
								</div>	
							))}
						</div>
						<p className="field-message font-p2 font-red">Requerido</p>
					</div>
				,

					<div key={i++} className={"form-field field-checkbox "+((this.state.validateForm.budget)?"":"error")+((this.state.activeFormFields.budget)?" active":"")}>
							<p className="font-h3 checkbox-title font-gray">Presupuesto estimado</p>
							<div className="checkbox-list">
								{["Menor $10,000", "$10,000 a $20,000", "$20,000 a $40,000", "Mayor $40,000"].map((item, i)=>(
									<div className="checkbox-item" key={i}>
										<input id={"checkbox-b-"+i} className="checkbox input" type="radio" name="budget" value={item} checked={this.state.form.budget===item} onChange={this.onChangeRadio}/>
										<label htmlFor={"checkbox-b-"+i} className="font-h3 custom-cursor">{item}</label>
									</div>
								))}
							</div>
							<p className="field-message font-p2 font-red">Requerido</p>
					</div>
				,

					<div key={i++} className={"form-field field-checkbox "+((this.state.validateForm.timeline)?"":"error")+((this.state.activeFormFields.timeline)?" active":"")}>
							<p className="font-h3 checkbox-title font-gray">Línea de tiempo del proyecto</p>
							<div className="checkbox-list">
								{["2 Meses", "4 Meses", "6 Meses +"].map((item, i)=>(
									<div className="checkbox-item" key={i}>
										<input id={"checkbox-c-"+i} className="checkbox input" type="radio" name="timeline" value={item} checked={this.state.form.timeline===item} onChange={this.onChangeRadio}/>
										<label htmlFor={"checkbox-c-"+i} className="font-h3 custom-cursor">{item}</label>
									</div>
								))}
								
							</div>
							<p className="field-message font-p2 font-red">Requerido</p>
					</div>
/* 				,
					<div key={i++} className={"form-field field-checkbox "+((this.state.validateForm.hearUs)?"":"error")+((this.state.activeFormFields.hearUs)?" active":"")}>
							<p className="font-h3 checkbox-title font-gray">¿Cómo te enteraste de nosotros?</p>
							<div className="checkbox-list">
								{["Google search", "Social", "Online Ads", "Awwwards", "Other"].map((item, i)=>(
									<div className="checkbox-item" key={i}>
										<input id={"checkbox-d-"+i} className="checkbox input" type="radio" name="hearUs" value={item} checked={this.state.form.hearUs===item} onChange={this.onChangeRadio}/>
										<label htmlFor={"checkbox-d-"+i} className="font-h3 custom-cursor">{item}</label>
									</div>
								))}
							</div>
							<p className="field-message font-p2 font-red">Requerido</p>
					</div> */
/* 				,
					<div key={i++} className={"form-field field-checkbox "+((this.state.validateForm.needNda)?"":"error")+((this.state.activeFormFields.needNda)?" active":"")}>
							<p className="font-h3 checkbox-title font-gray">Does your project need NDA?</p>
							<div className="checkbox-list">
								{["Yes", "No"].map((item, i)=>(
									<div className="checkbox-item" key={i}>
										<input id={"checkbox-d-"+i} className="checkbox input" type="radio" name="needNda" value={item} checked={this.state.form.needNda===item} onChange={this.onChangeRadio}/>
										<label htmlFor={"checkbox-d-"+i} className="font-h3 custom-cursor">{item}</label>
									</div>
								))}
							</div>
							<p className="field-message font-p2 font-red">Requerido</p>
					</div> */
				,

					<div key={i++} className={"form-field field-textarea "+((this.state.validateForm.about)?"":"error")+((this.state.activeFormFields.about)?" active":"")} onFocus={this.onFocus} onBlur={this.onBlur}>
							<label htmlFor="about-project" className="label-animate font-h3">Háblanos de tu proyecto</label>
							<textarea autoFocus={this.autofocus} maxLength={500} id="about-project" className="input textarea custom-cursor font-h4" name="about" row="1" tabIndex="10" onInput={this.autoExpand} onChange={this.onChangeInput} value={this.state.form.about}></textarea>
							<p className="field-message font-p2 font-red">Requerido</p>
					</div>
				,
			

		]

	}

	


}


export default ContactForm;

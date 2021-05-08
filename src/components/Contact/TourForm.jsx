import React, {Component} from "react";

import HubSpot from '../utils/hubspot'

import Form from '../Form';


class TourForm extends Form {
	
	constructor(props){
		super(props);
		this.state = {
			form: {
				firstname: "",
				email: "",
				phone: "",
				company: "",
				jobTitle: "",
				companySize: "",
			},
			validateForm:{
				firstname: true,
				email: true,
				phone: true,
				company: true,
				jobTitle: true,
				companySize: true, 
			},
			activeFormFields:{
				firstname: false,
				email: false,
				phone: false,
				company: false,
				jobTitle: false,
				companySize: false,
			},
			currentSlide: 0,
			maxSlide: this.getFormSlide().length - 1,
			successForm: false,
			sendMessage: "",

			popup: "opened",
		}

		this.sendFunction = HubSpot.sendTour;
	}

	

	getFormSlide(){
		let i = 0;
		return [
					<div key={i++} className="form-row">
						<div className={"form-field "+((this.state.validateForm.firstname)?"":"error")+((this.state.activeFormFields.firstname)?" active":"")} onFocus={this.onFocus} onBlur={this.onBlur}>
							<label className="label-animate font-h3" htmlFor="contact-form-name">Ingresa tu nombre</label>
							<input autoFocus={this.autofocus} maxLength={50} id="contact-form-name" className="input font-h3 custom-cursor" type="text" name="firstname" value={this.state.form.firstname} onChange={this.onChangeInput}/>
							<p className="field-message font-p2 font-red">Requerido</p>
						</div>
					</div>
				,

					<div key={i++} className="form-row">
						<div className={"form-field "+((this.state.validateForm.email)?"":"error")+((this.state.activeFormFields.email)?" active":"")} onFocus={this.onFocus} onBlur={this.onBlur}>
							<label className="label-animate font-h3" htmlFor="contact-form-email">Correo de negocios</label>
							<input autoFocus={this.autofocus} maxLength={50} id="contact-form-email" className="input font-h3 custom-cursor" type="email" name="email" value={this.state.form.email} onChange={this.onChangeInput}/>
							<p className="field-message font-p2 font-red">Invalido</p>
						</div>
					</div>
				,

					<div key={i++} className="form-row">
						<div className={"form-field "+((this.state.validateForm.phone)?"":"error")+((this.state.activeFormFields.phone)?" active":"")} onFocus={this.onFocus} onBlur={this.onBlur}>
							<label className="label-animate font-h3" htmlFor="contact-form-email">Numero de telefono</label>
							<input autoFocus={this.autofocus} maxLength={50} id="contact-form-email" className="input font-h3 custom-cursor" type="tel" name="phone" value={this.state.form.phone} onChange={this.onChangeInput}/>
							<p className="field-message font-p2 font-red">Invalido</p>
						</div>
					</div>
				,

					<div key={i++} className="form-row">
						<div className={"form-field "+((this.state.validateForm.company)?"":"error")+((this.state.activeFormFields.company)?" active":"")} onFocus={this.onFocus} onBlur={this.onBlur}>
							<label className="label-animate font-h3" htmlFor="contact-form-name">Compañia</label>
							<input autoFocus={this.autofocus} maxLength={50} id="contact-form-name" className="input font-h3 custom-cursor" type="text" name="company" value={this.state.form.company} onChange={this.onChangeInput}/>
							<p className="field-message font-p2 font-red">Requerido</p>
						</div>
					</div>
				,

					<div key={i++} className={"form-field field-checkbox "+((this.state.validateForm.companySize)?"":"error")+((this.state.activeFormFields.companySize)?" active":"")} >
						<p className="font-h3 checkbox-title font-gray">Choose your company size</p>
						<div className="checkbox-list">
							{["Just me", "2-20", "21-100", "101-1000", "1001+"].map((item, i)=>(
								<div className="checkbox-item" key={i}>
									<input id={"checkbox-a-"+i} className="checkbox input" type="radio" name="companySize" value={item} checked={this.state.form.companySize===item} onChange={this.onChangeRadio}/>
									<label htmlFor={"checkbox-a-"+i} className="font-h3 custom-cursor">{item}</label>
								</div>	
							))}
						</div>
						<p className="field-message font-p2 font-red">Required</p>
					</div>
				,
					<div key={i++} className="form-row">
						<div className={"form-field "+((this.state.validateForm.jobTitle)?"":"error")+((this.state.activeFormFields.jobTitle)?" active":"")} onFocus={this.onFocus} onBlur={this.onBlur}>
							<label className="label-animate font-h3" htmlFor="contact-form-name">Job Title</label>
							<input autoFocus={this.autofocus} maxLength={50} id="contact-form-name" className="input font-h3 custom-cursor" type="text" name="jobTitle" value={this.state.form.jobTitle} onChange={this.onChangeInput}/>
							<p className="field-message font-p2 font-red">Required</p>
						</div>
					</div>

				,			

		]


	}


}


export default TourForm;

import React, {Component} from "react";
import UserCookies from 'universal-cookie';
import {TweenMax, Power2} from "gsap/TweenMax";
import MyLink from './utils/navigation';

let userCookies = new UserCookies();

class Cookie extends Component {
	
	constructor(props) {
		super(props)
		
		this.handleClick = this.handleClick.bind(this);
	}


	componentDidMount(){
		if(!userCookies.get('agreeCookies')){
			let containerCookie= document.querySelector(".cookie-container");
			TweenMax.set(containerCookie, {zIndex: ""});
			TweenMax.fromTo(containerCookie, 1,{y:"100%",opacity:0,zIndex: ""}, {y:"0%",opacity:1,zIndex: "",ease:  Power2.easeOut, delay: 3.5});
		}
	}

	handleClick(){
		userCookies.set('agreeCookies', true, {maxAge :2592000});
		let containerCookie= document.querySelector(".cookie-container");
		TweenMax.fromTo(containerCookie, 1,{y:"0%",opacity:1}, {y:"100%",opacity:0,ease:  Power2.easeOut});

	}
	
	render(){
		if(userCookies.get('agreeCookies')){ return null; }
		return(
			<div className="cookie-container bg-color-white">
				<div className="cookie-content">
					<p className="text font-p2 font-white ">{this.props.dataCookie.text}</p>
					<MyLink to={this.props.dataCookie.link} className="font-p2 link font-bold font-white font-underline">{this.props.dataCookie.linkText}</MyLink>
				</div>
				<div className="button custom-cursor" onClick={this.handleClick}>
					<p className="font-p2 font-uppercase" >{this.props.dataCookie.buttonText}</p>
				</div>
			</div>
		);
	}
}


export default Cookie;
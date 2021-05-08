import React, {Component} from "react";
import { NavLink } from "react-router-dom";
// import CustomScroll from './customScroll';
import GeneralAnimations from './generalAnimations';
import {closest, cubicBezier} from './functions';
import {TweenMax, Power2} from "gsap/TweenMax";


export class Navigation extends Component {

	constructor(props){
		super(props)
		this.state = {
			isNavigating : false,
			finishAnimation : true,
		}
		this.navigate = this.navigate.bind(this);
		this.animateCurtainNavegation = this.animateCurtainNavegation.bind(this);
	}

	componentDidMount(){		
		window.addEventListener("openMenuHeader", ()=>{
			this.animateCurtainNavegation();
		})
	}

	componentDidUpdate(){
		// new CustomScroll();
	}

	navigate(event){
		if(event.currentTarget.href !== window.location.href){
			if(!this.state.isNavigating){
				// Si no se ha empezado a navegar se navega.
				this.state.isNavigating = true;
				this.state.finishAnimation = false;
				event.preventDefault();
				event = new CustomEvent("navigation", { "detail": {target:event.currentTarget} });
				this.handleNavigation(event.detail.target);
				window.dispatchEvent(event);
			}else if(this.state.finishAnimation){
				// Si se ha empezado a navegar y se ha terminado la animación este será el click simulado en el enlace para hacer la navegación.
				this.state.isNavigating = false;
			}else{
				// Todo intento de navegación mientras se está navegando sera ignorado.
				event.preventDefault();
			}
		}
	}

	handleNavigation(target){
		//Elements OUT
		let finishTime = 0;
		// if( !closest(target, ".menu-container.active")){
			// finishTime = GeneralAnimations.animateGeneralElementsOut();	
			// setTimeout(()=>{
				this.animateCurtainNavegation();
			// },finishTime);
		// }
			// finishTime+= 1;
		//Click new page
		setTimeout(()=>{
			this.state.finishAnimation = true;
			target.click();
			let event = new CustomEvent("navigationClick");
			window.dispatchEvent(event);
		}, finishTime*1000 + 800);
	}

	animateCurtainNavegation(){
		var time = 0.8;	

		var myEase= cubicBezier("0.87,0,0.07,1");
		
		var initialRight= "-103%";
		var finalRight= "103%";
		var initialTop= "0%";
		var finalTop= "0%";
		// if($targetClicked && $targetClicked.closest("*[data-navigation=top]").length > 0){
		// 	initialRight= "0%";
		// 	finalRight= "0%";
		// 	initialTop= "103%";
		// 	finalTop= "-103%";
		// }

		TweenMax.fromTo('.navegation-curtain',time,{ x: initialRight, y: initialTop},{x:"0%", y:"0%", ease: myEase, onComplete:function(){
			TweenMax.to('.navegation-curtain',time,{x:finalRight, y: finalTop, ease: myEase, delay:0.5});
		}});

	}

	render(){
		return (
			<React.Fragment>
				{this.props.children}
				<div className="navegation-curtain"></div>
			</React.Fragment>
			); 

	}

}

// Es un link normal pero que activa la navegacion entre páginas.
// export default function MyLink(props) {
// 	return <NavLink {...props} onClick={navigate} />
// }


export default class MyLink extends Navigation {

	constructor(props){
		super(props);
	}

	render(){
		return <NavLink {...this.props} onClick={this.navigate} />		
	}
}

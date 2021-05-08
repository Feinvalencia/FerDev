import React, {Component} from "react";
import {Helmet} from "react-helmet";
import { TweenLite, Power2} from "gsap/TweenMax";

import GeneralAnimations from '../utils/generalAnimations';
import CustomScroll from '../utils/customScroll';
import CustomCursor from '../utils/customCursor';


import coverImg from '../../assets/jump.jpg';

class pageThanks extends Component {
	
	constructor(props){
		super(props)
		this.state  = {
			
		}

		this.successRef = React.createRef();
		this.animateThanks = this.animateThanks.bind(this);
	}	
	
	componentDidMount(){
		console.log('componentDidMount')
		window.scrollTo(0,0);
		GeneralAnimations.prepareGeneralAnimations();
    	// setTimeout(GeneralAnimations.animateGeneralElements, 1000);
		GeneralAnimations.iniObserver();
		// new CustomScroll();
		this.animateThanks();
		this.props.functions.hideFooter();
	}

	componentWillUnmount() {
		this.props.functions.showFooter();
	}

	componentDidUpdate(){
		GeneralAnimations.iniObserver();
	}
	
	animateThanks(){
		TweenLite.set(this.successRef.current.querySelector('img'),{opacity: 1, y: "100%", ease: Power2.easeInOut});
		TweenLite.set(this.successRef.current.querySelector('.success-text-container'),{opacity: 0, y:-20});
		TweenLite.to(this.successRef.current.querySelector('img'), 1.5,{opacity: 1, y: "0%", ease: Power2.easeOut, delay: 0.8});
		TweenLite.to(this.successRef.current.querySelector('.success-text-container'), 1.5,{opacity: 1, y:0, delay: 1.8, ease: Power2.easeOut});
		
	}


	render(){
		return(
			<section className="page page-thanks page-100vh">
				<Helmet>
					<title>{this.props.data.title}</title>
					<meta name="robots" content="noindex, follow"/>
					<link rel="canonical" href={window.bb_baseURL+this.props.routeParams.currentPath} />
					<link rel="alternate" hreflang="en" href={window.bb_baseURL+this.props.routeParams.pathEN} />
					<link rel="alternate" hreflang="es" href={window.bb_baseURL+this.props.routeParams.pathES} />
				</Helmet>


				<div className="module success-container" ref={this.successRef}>
					<img src={coverImg} alt="success-img"/>
					<div className="success-text-container small-width">
						<p className="font-h1 font-center">¡Gracias por ponerte en contacto con nosotros! </p>
						{/*<p className="font-h3 font-center">A customer manager will get back to you within the next day or two to personally learn more about your project.</p>*/}
					</div>
					<ConfettiWrapper />
				</div>
			</section>
		);
	}
}


export default pageThanks;



class ConfettiWrapper extends Component{
	constructor(props){
		super(props);
		this.state = {
			items :[],
		}
		this.set = [];
	}
	componentDidMount(){
		let items = [];
		let keycount = 0;
		for (var j = 0; j < 5; j++) {
			this.set.push(setTimeout(()=>{
				for (var i = 0; i < 20; i++){
					items.push(<Confetti key={keycount}/>);
					keycount++;
				}
				this.setState({items: items})

			}, 1000+400*j));
		}
	}

	componentWillUnmount(){
		for (var i = 0; i < this.set.length; i++) {
			clearTimeout(this.set[i]);
		}
	}


	render(){
		return(
			<div className="confetti-wrapper">
				{this.state.items}
			</div>
		)
	}
}

class Confetti extends Component {
	constructor(props){
		super(props);
	  	let colourIdx = Math.ceil(Math.random() * 6);
	  	let color = "";
		switch(colourIdx) {
			case 1:
				color = "yellow";
				break;
			case 2:
				color = "blue";
				break;
			case 3:
				color = "green";
				break;
			case 4:
				color = "purple";
				break;
			case 5:
				color = "gray";
				break;
			default:
				color = "red";
		}
		let width = Math.random() * 20;
		this.state = {
			width : width,
	  		height : width * 0.4,
	  		color : color,
		}
		this.refConfetti = React.createRef();
	}

	componentDidMount(){
	  	this.dropConfetti();
	}

	dropConfetti() {
	  // $('.confetti-'+x).animate({
	  //   top: "100%",
	  //   left: "+="+Math.random()*15+"%"
	  // }, Math.random()*2000 + 2000, function() {
	  //   this.resetConfetti(x);
	  // });

	  let time = Math.random()*2 + 2;
	  TweenLite.to(this.refConfetti.current, time,{
	  		top: "100%",
	    	left: "+="+Math.random()*15+"%",
	    	onComplete: ()=>{
	    		this.resetConfetti();
	    	}

	  })
	}

	resetConfetti(){
	  // ('.confetti-'+x).animate({
	  //   "top" : -Math.random()*20+"%",
	  //   "left" : "-="+Math.random()*15+"%"
	  // }, 0, function() {
	  //   this.dropConfetti(x);             
	  // });
		if(this.refConfetti.current){
			  TweenLite.set(this.refConfetti.current,{
			  		"top" : -Math.random()*20+"%",
			    	"left" : "-="+Math.random()*15+"%",
			    	onComplete: ()=>{
			    		this.dropConfetti();
			    	}
			  } )
		}
	}



	render(){
		return(
			<div className={"confetti "+this.state.color} ref={this.refConfetti} style={{
			    "width" : this.state.width+"px",
			    "height" : this.state.height+"px",
			    "top" : -Math.random()*20+"%",
			    "left" : Math.random()*100+"%",
			    "opacity" : 1, //Math.random()+0.5,
			    "transform" : "rotate("+Math.random()*360+"deg)",
			    "pointerEvents" : "none",
			  }}
			></div>
		)
	}
}

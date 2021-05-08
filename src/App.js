import React, {Component} from "react";
import { Route, Switch} from "react-router-dom";

import PageHome from './components/containers/pageHome';
import PageAbout from './components/containers/pageAbout';
import PageSolutions from './components/containers/pageSolutions';
import PageTechnology from './components/containers/pageTechnology';
import PageContact from './components/containers/pageContact';
import PageThanks from './components/containers/pageThanks';
import Page404 from './components/containers/page404';
import PageLegal from './components/containers/pageLegal';

import Header from './components/Header'
import Footer from "./components/Footer";
import Cookie from "./components/Cookie";
import GeneralAnimations from './components/utils/generalAnimations';
import GoogleTagManager from "./components/utils/googleTagManager";
import GeneralParallax from "./components/utils/parallax";
// import CustomScroll from './utils/customScroll';

import CustomCursor from './components/utils/customCursor';

import {Navigation} from './components/utils/navigation';
import {isTouchDevice} from './components/utils/functions';

import './css/style.css';

import dataES from './components/data/es';
import dataEN from './components/data/en';
import AllLinks from "./components/data/links";


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			touchDevice: true,
		}
		this.bodyRef = React.createRef();
		this.footerRef = React.createRef();

		this.originalWidth = null;
		this.originalHeight = null;
		this.scrollY = 0;

		this.fixVh = this.fixVh.bind(this);
		this.disableScroll = this.disableScroll.bind(this);
		this.enableScroll = this.enableScroll.bind(this);

		window.bb_baseURL_ES = 'https://binaryblocks.io/es/';
		window.bb_baseURL_EN = 'https://binaryblocks.io/';

		if(this.props.lang && this.props.lang==="es"){
			this.data = dataES;
			window.bb_baseURL = window.bb_baseURL_ES;
		}else{
			this.data = dataEN;
			window.bb_baseURL = window.bb_baseURL_EN;
		}

		

		this.functions = {
			showFooter: ()=>{
				if(this.footerRef.current){
					this.footerRef.current.showFooter();
				}
			},
			hideFooter: ()=>{
				if(this.footerRef.current){
					this.footerRef.current.hideFooter();
				}
			},
		}
	}
	componentDidMount(){
		if(isTouchDevice()){
			document.querySelector("body").classList.add("touch-device");
			this.setState({touchDevice: true});
		}else{
			document.querySelector("body").classList.remove("touch-device");
			this.setState({touchDevice: false});
		}

		GoogleTagManager.initialize();
		GeneralAnimations.iniObserver();
		this.fixVh();
		
		window.addEventListener("resize",this.fixVh);

		window.addEventListener("disableScroll", this.disableScroll);
		window.addEventListener("enableScroll", this.enableScroll);
		window.addEventListener("navigation", ()=>{this.scrollY =0});
		window.addEventListener("touchmove", function(e){
			if(document.documentElement.classList.contains("disable-scroll")){
				e.preventDefault();
			}
		}, {passive: false, capture: false});

		new GeneralParallax();

	}	



	componentWillUnmount(){
		// window.removeEventListener('scroll', GeneralAnimations.animateGeneralElements);
		window.removeEventListener('resize', this.fixVh);
	}

	componentDidUpdate(){
		
		
	}

	disableScroll(){
		this.scrollY = window.scrollY;
		document.documentElement.classList.add("disable-scroll");
	}
	enableScroll(){
		document.documentElement.classList.remove("disable-scroll");
		window.scrollTo(0, this.scrollY);
	}

	fixVh(){
		if(this.originalWidth !== window.innerWidth || Math.abs(window.innerHeight-this.originalHeight) >= 200){
			if(window.innerWidth >= 200){
				let vh = window.innerHeight*0.01;
				document.body.style.setProperty('--1vh', vh+'px');
				this.originalWidth = window.innerWidth;
				this.originalHeight = window.innerHeight;
			}
		}
	}
	
	render(){
		let customCursor = null;
		if(!this.state.touchDevice){
			customCursor = <CustomCursor />
		}
		let routes = [
		{
			pathEN: AllLinks.about.en,
			pathES: AllLinks.about.es,
			exact: false,
			Component: (props)=>(<PageAbout {...props}/>),
			dataName: 'PageAbout',
		},
		{
			pathEN: AllLinks.solutions.en,
			pathES: AllLinks.solutions.es,
			exact: false,
			Component: (props)=>(<PageSolutions {...props}/>),
			dataName: 'PageSolutions',
		},
		{
			pathEN: AllLinks.technology.en,
			pathES: AllLinks.technology.es,
			exact: false,
			Component: (props)=>(<PageTechnology {...props}/>),
			dataName: 'PageTechnology',
		},
		{
			pathEN: AllLinks.legal.en,
			pathES: AllLinks.legal.es,
			exact: false,
			Component: (props)=>(<PageLegal {...props}/>),
			dataName: 'PageLegal',
		},
		{
			pathEN: AllLinks.contact.en,
			pathES: AllLinks.contact.es,
			exact: false,
			Component: (props)=>(<PageContact {...props}/>),
			dataName: 'PageContact',
		},
		{
			pathEN: AllLinks.thanks.en,
			pathES: AllLinks.thanks.es,
			exact: false,
			Component: (props)=>(<PageThanks {...props}/>),
			dataName: 'PageThanks',
		},
		{
			pathEN: AllLinks.tour.en,
			pathES: AllLinks.tour.es,
			exact: false,
			Component: (props)=>(<PageContact tour={true} {...props}/>),
			dataName: 'PageTour',
		},
		{
			pathEN: AllLinks.thanksTour.en,
			pathES: AllLinks.thanksTour.es,
			exact: false,
			Component: (props)=>(<PageThanks {...props}/>),
			dataName: 'PageThanks',
		},
		// {
		// 	pathEN: AllLinks.video.en,
		// 	pathES: AllLinks.video.es,
		// 	exact: true,
		// 	Component: (props)=>(<PageHome {...props} video={true}/>),
		// 	dataName: 'PageHome',
		// },
		{
			pathEN: AllLinks.home.en,
			pathES: AllLinks.home.es,
			exact: true,
			Component: (props)=>(<PageHome {...props}/>),
			dataName: 'PageHome',
		},
		{
			pathEN: AllLinks.p404.en,
			pathES: AllLinks.p404.es,
			exact: false,
			Component: (props)=>(<Page404 {...props}/>),
			dataName: 'Page404',
		}
		];
		return(
			<div className="website-app App body-content">
			  <Header dataMenu={this.data.Menu}/>
			  <div className="body body-wrapper" ref={this.bodyRef}>
			  	<Navigation>
				    <Switch>
						{routes.map((item, i)=>{
							item.currentPath = item.pathES;
							return <Route path={item.currentPath} exact={item.exact} component={(props) => (
								<item.Component {...props} data={this.data[item.dataName]} routeParams={item} functions={this.functions}/>
							)} key={i}/>
						})}
						{routes.map((item, i)=>{
							item.currentPath = item.pathEN;
							return <Route path={item.currentPath} exact={item.exact} component={(props) => (
								<item.Component {...props} data={this.data[item.dataName]} routeParams={item} functions={this.functions}/>
							)} key={i}/>
						})}
				    </Switch>
				    <Footer dataFooter={this.data.Footer} dataMenu={this.data.Menu} ref={this.footerRef}/>
				</Navigation>
			  </div>
			  
			  {customCursor}
			  <Cookie dataCookie={this.data.Cookie}/>
			</div>
		);
	}
}

export default App;




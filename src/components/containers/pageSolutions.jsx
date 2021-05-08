import React, {Component} from "react";
import SEO from '../../components/SEO';

import Cover from '../../components/Home/Cover';
import Text from '../../components/Solutions/Text';
import TextImage from '../../components/Solutions/TextImage';
import LogoCarousel from '../../components/Home/LogoCarousel';
import Cards from '../../components/Home/Cards';
import Ornaments from '../../components/Ornaments';
import Aproach from '../../components/About/Aproach';
import NextSection from '../../components/Home/NextSection';



import GeneralAnimations from '../utils/generalAnimations';
/* import CustomScroll from '../utils/customScroll';
import CustomCursor from '../utils/customCursor';

import data from '../assets/data.png';
import vision from '../assets/window1.png';
import titanic from '../assets/titanic.png';
import figure2 from '../assets/figure2.png'; */


import imageWebApps from '../../assets/WEB-APP.jpg'
import imageMobileApps from '../../assets/MOBILE.jpg'
import cover from '../../assets/portfolio.jpg';
/* import reactImg from '../assets/img/servicios/contenido.png';
import nodejsImg from '../assets/img/servicios/desarrollo.png';
import mongodbImg from '../assets/img/servicios/diseño.png';
import expressImg from '../assets/img/servicios/estrategia.png'; */



class pageSolutions extends Component {
	
	constructor(props){
		super(props)
		this.state  = {

			// dataImages1: [
			// 	{
			// 		mediaType: "image",
			// 		mediaSrc: figure2,
			// 	},{
			// 		mediaType: "image",
			// 		mediaSrc: figure2,
			// 	},{
			// 		mediaType: "image",
			// 		mediaSrc: figure2,
			// 	},
			// ],
			// dataList1: this.props.data.awardsList,
			dataText: {
				title: {
					text:this.props.data.borderText,
					class: "font-h1 font-white font-center font-border",
				}
			},
			dataText2: {
				title: {
					text: this.props.data.titleAndDescription.title,
					class: "medium-width font-h2 font-center extra-margin",
				},
				description:{
					text: this.props.data.titleAndDescription.description,
					class: "small-width font-h4 font-center",
				}
			},
			cards: [{
				windowTitle: this.props.data.cards[0].windowTitle,
				title: this.props.data.cards[0].title,
				text: this.props.data.cards[0].text,
				img: require('../../assets/icons/HEALTH.jpg'),
			},{
				windowTitle: this.props.data.cards[1].windowTitle,
				title: this.props.data.cards[1].title,
				text: this.props.data.cards[1].text,
				img: require('../../assets/icons/MEDIA.jpg'),
			},{
				windowTitle: this.props.data.cards[2].windowTitle,
				title: this.props.data.cards[2].title,
				text: this.props.data.cards[2].text,
				img: require('../../assets/icons/RETAIL.jpg'),
			},{
				windowTitle: this.props.data.cards[3].windowTitle,
				title: this.props.data.cards[3].title,
				text: this.props.data.cards[3].text,
				img: require('../../assets/icons/FINANCE.jpg'),
			},{
				windowTitle: this.props.data.cards[4].windowTitle,
				title: this.props.data.cards[4].title,
				text: this.props.data.cards[4].text,
				img: require('../../assets/icons/REALESTATE.jpg'),
			},{
				windowTitle: this.props.data.cards[5].windowTitle,
				title: this.props.data.cards[5].title,
				text: this.props.data.cards[5].text,
				img: require('../../assets/icons/HOSPITALITY.jpg'),
			},],
			dataText3: {
				title: {
					text: this.props.data.titleAndDescription2.title,
					class: "medium-width font-h2 font-center extra-margin",
				},
				description:{
					text: this.props.data.titleAndDescription2.description,
					class: "small-width font-h4 font-center",
				}
			},
			textAndImageData: [
				{
					aligment: "img-right",
					mediaSrc: imageWebApps,
					title: this.props.data.textAndImageData[0].title,
					description: this.props.data.textAndImageData[0].description,
					class: "web-apps",
				},{
					aligment: "img-left",
					mediaSrc: imageMobileApps,
					title: this.props.data.textAndImageData[1].title,
					description: this.props.data.textAndImageData[1].description,
					class: "mobile-apps",
				}
			],
			dataTextTech: {
				title: {
					text:this.props.data.titleTech,
					class: "font-h1 font-white font-center font-border",
				}
			},
			nextSectionData: this.props.data.nextSectionData,
			textLoop: this.props.data.textLoop.join(" · ")+" ·",
			// techData:[{
			// 	title: this.props.data.techs[0],
			// 	img: reactImg,
			// },
			// {
			// 	title: this.props.data.techs[1],
			// 	img: nodejsImg,
			// },
			// {
			// 	title: this.props.data.techs[2],
			// 	img: mongodbImg,
			// },
			// {
			// 	title: this.props.data.techs[3],
			// 	img: expressImg,
			// }],
		}
		// nextSectionData: {
		// 	text: this.props.data.contactLink,
		// },
	}
	
	componentDidMount(){
		window.scrollTo(0,0);
		GeneralAnimations.prepareGeneralAnimations();
    	// setTimeout(GeneralAnimations.animateGeneralElements, 1000);
		GeneralAnimations.iniObserver();
		// new CustomScroll();

	}

	componentDidUpdate(){
		GeneralAnimations.iniObserver();
	}


	render(){
		return(
			<section className="page page-solutions">
				<SEO data={this.props.data.seo} routeParams={this.props.routeParams}/>

				<Ornaments all={true}/>
				<Cover title={this.props.data.cover.titleHtml} image={cover} subtitle={this.props.data.cover.subtitle}/>
				<Text title={this.state.dataText.title} extraClass="small-width"/>
				<Aproach data={this.props.data.approachData}/>
				<Text title={this.state.dataText2.title} description={this.state.dataText2.description} extraClass="medium-width"/>
				<Cards cards={this.state.cards}/>
				<Text title={this.state.dataText3.title} description={this.state.dataText3.description} extraClass="medium-width"/>
				{this.state.textAndImageData.map((value, index) => {
					return <TextImage key={index} data={value}/>
				})}
				<LogoCarousel textLoop={this.state.textLoop}/>
				{/*<TechCarousel title={this.props.data.titleTech} contentList={this.state.techData}/>*/}
				<Text title={this.state.dataTextTech.title} extraClass="small-width"/>
				<NextSection text={this.state.nextSectionData.text} link={this.state.nextSectionData.link}/>

			</section>
		);
	}
}


export default pageSolutions;

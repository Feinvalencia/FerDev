import React, {Component} from "react";
import SEO from '../../components/SEO';

import Cover from '../../components/Home/Cover';
import NextSection from '../../components/Home/NextSection';
import NumberAndWindows from '../../components/Solutions/NumberAndWindows';
import Ornaments from '../../components/Ornaments';

import GeneralAnimations from '../utils/generalAnimations';

import centralized from '../../assets/centralized.jpg';
import magic from '../../assets/magic.jpg';
import datasecurity from '../../assets/datasecurity.jpg';
import levitation from '../../assets/levitation.jpg';
import titanic from '../../assets/titanic.png';
import go from '../../assets/go.jpg';
import goals from '../../assets/goals.jpg';
import modular from '../../assets/modular.jpg';
import cover from '../../assets/celebrate.jpg';

class pageTechnology extends Component {
	
	constructor(props){
		super(props)
		this.state  = {
			// page: false,
			numberAndWindowsData: [
				{
					aligment: "window-left",
					mediaType: "image",
					mediaSrc: centralized,
					title: this.props.data.numberAndWindowsData[0].title,
					description: this.props.data.numberAndWindowsData[0].description,
					class: "",
					number:"01",
				},{
					aligment: "window-right",
					mediaType: "image",
					mediaSrc: magic,
					title: this.props.data.numberAndWindowsData[1].title,
					description: this.props.data.numberAndWindowsData[1].description,
					class: "",
					number:"02",
				},{
					aligment: "window-left",
					mediaType: "image",
					mediaSrc: datasecurity,
					title: this.props.data.numberAndWindowsData[2].title,
					description: this.props.data.numberAndWindowsData[2].description,
					class: "",
					number:"03",
				},{
					aligment: "window-right",
					mediaType: "image",
					mediaSrc: go,
					title: this.props.data.numberAndWindowsData[3].title,
					description: this.props.data.numberAndWindowsData[3].description,
					class: "",
					number:"04",
				},{
					aligment: "window-left",
					mediaType: "image",
					mediaSrc: modular,
					title: this.props.data.numberAndWindowsData[4].title,
					description: this.props.data.numberAndWindowsData[4].description,
					class: "",
					number:"05",
				},{
					aligment: "window-right",
					mediaType: "image",
					mediaSrc: levitation,
					title: this.props.data.numberAndWindowsData[5].title,
					description: this.props.data.numberAndWindowsData[5].description,
					class: "",
					number:"06",
				},{
					aligment: "window-left",
					mediaType: "image",
					mediaSrc: goals,
					title: this.props.data.numberAndWindowsData[6].title,
					description: this.props.data.numberAndWindowsData[6].description,
					class: "",
					number:"07",
				},{
					aligment: "window-right",
					mediaType: "image",
					mediaSrc: titanic,
					title: this.props.data.numberAndWindowsData[7].title,
					description: this.props.data.numberAndWindowsData[7].description,
					class: "",
					number:"08",
				},
			],
			textLoop: this.props.data.textLoop.join(" · ")+" ·",
			nextSectionData: this.props.data.nextSectionData,
		}
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
			<section className="page page-technology">
				<SEO data={this.props.data.seo} routeParams={this.props.routeParams}/>

				<Ornaments technology="true"/>
				<Cover title={this.props.data.cover.titleHtml} image={cover} subtitle={this.props.data.cover.subtitle}/>
				{this.state.numberAndWindowsData.map((value, index) => {
					return <NumberAndWindows key={index} data={value}/>
				})}
				{/*<LogoCarousel textLoop={this.state.textLoop}/>*/}
				<NextSection text={this.state.nextSectionData.text} link={this.state.nextSectionData.link}/>
				
			</section>
		);
	}
}


export default pageTechnology;

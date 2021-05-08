import React, {Component} from "react";
import SEO from '../../components/SEO';

import LogoCarousel from '../../components/Home/LogoCarousel';
import Cover from '../../components/Home/Cover';
import TextAndWindows from '../../components/Home/TextAndWindows';
import SpecialText from '../../components/SpecialText';
import Ornaments from '../../components/Ornaments';
import NextSection from '../../components/Home/NextSection';
// import TextLoop from '../components/TextLoop';
// import VideoYoutube from '../components/VideoYoutube';
// import YouTube from 'react-youtube';

import logos from '../../assets/svg/logos.svg';


/* import data from '../assets/data.png';
import vision from '../assets/window1.png';
import titanic from '../assets/titanic.png'; */
import videoData from '../../assets/datos.mp4'
import videoBirds from '../../assets/birds.mp4'
import videoPiramide from '../../assets/piramide.mp4'
import videoCover from '../../assets/cover.mp4';
// import imageCover from '../assets/cover.png';
import imageCover from '../../assets/cover_600.jpg';
import videoBB from '../../assets/video/binaryblocks.mp4';

import GeneralAnimations from '../utils/generalAnimations';
import CustomCursor from '../utils/customCursor';

class pageHome extends Component {
	
	constructor(props){
		super(props)
    	this.videoRef= React.createRef();
		this.state  = {
			// page: false,
			textAndWindowsData: [
				{
					aligment: "window-left",
					mediaType: "video",
					mediaSrc: videoData,
					title: this.props.data.textAndWindowsData[0].title,
					description: this.props.data.textAndWindowsData[0].description,
					link: this.props.data.textAndWindowsData[0].link,
					linkText: this.props.data.textAndWindowsData[0].linkText,
					class: "",
					ratio: 480/656,
				},{
					aligment: "window-right",
					mediaType: "video",
					mediaSrc: videoBirds,
					title: this.props.data.textAndWindowsData[1].title,
					description: this.props.data.textAndWindowsData[1].description,
					link: this.props.data.textAndWindowsData[1].link,
					linkText: this.props.data.textAndWindowsData[1].linkText,
					class: "",
					ratio: 480/765,
				},{
					aligment: "window-left",
					mediaType: "video",
					mediaSrc: videoPiramide,
					title: this.props.data.textAndWindowsData[2].title,
					description: this.props.data.textAndWindowsData[2].description,
					link: this.props.data.textAndWindowsData[2].link,
					linkText: this.props.data.textAndWindowsData[2].linkText,
					class: "",
					ratio: 700/656,
				},
			],
			// nextSectionData: {
			// 	text: this.props.data.nextSectionData.text,
			// 	link: this.props.data.nextSectionData.link,
			// },
			logosText:{
				title: {__html:this.props.data.logosText.titleHtml},
				description: this.props.data.logosText.description,
			},
			popUpVisible: false,
			nextSectionData: this.props.data.nextSectionData,
			
		}

	/*	this.opts = {
	      height: '390',
	      width: '640',
	      playerVars: { // https://developers.google.com/youtube/player_parameters
	        autoplay: 0,
	        // controls: 0,
	        showinfo: 0,
	        suggestedQuality: 'medium'
	      }
	    };*/
	    this.openPopupVideo = this.openPopupVideo.bind(this);
		this.closePopupVideo = this.closePopupVideo.bind(this);
		this.cancelFullScreen = this.cancelFullScreen.bind(this);
		this.playVideoFullScreen = this.playVideoFullScreen.bind(this);
	}
	
	componentDidMount(){
		window.scrollTo(0,0);
		GeneralAnimations.prepareGeneralAnimations();
    	// setTimeout(GeneralAnimations.animateGeneralElements, 1000);
    	// GeneralAnimations.iniObserver();
    	setTimeout(GeneralAnimations.iniObserver,500);

    	if(this.props.video){
    		window.dispatchEvent(new Event('disableScroll'));
			this.playVideoFullScreen();
			this.videoRef.current.setAttribute("autoplay", "true");
			this.videoRef.current.setAttribute("preload", "auto");
			// this.videoRef.current.play();
			this.setState({popUpVisible: true})
    	}

		// new CustomScroll();
	}


	componentDidUpdate(){
		// GeneralAnimations.iniObserver();
	}

	
  	toggleVideo(event){
  		let video = event.target;
  		if(video.paused){
  			video.play();
  		}else{
  			window.dispatchEvent(new Event('enableScroll'));
  			video.pause();
  		}
  	}

  	openPopupVideo(){
  		window.dispatchEvent(new Event('disableScroll'));
		this.playVideoFullScreen();
		this.videoRef.current.play();
		this.setState({popUpVisible: true})
  	}

  	closePopupVideo(){
  		window.dispatchEvent(new Event('enableScroll'));
		this.setState({popUpVisible: false});
		this.videoRef.current.pause();
  	}

	cancelFullScreen(){
		// if(window.innerWidth < 1000){
		// 	let fullscreenElement = document.fullscreenElement || 
		// 							document.mozFullscreenElement || 
		// 							document.webkitFullscreenElement || 
		// 							document.msFullscreenElement;
		// 	if( fullscreenElement == null ){
		// 		this.videoRef.current.removeEventListener("fullscreenchange", this.closePopupVideo);
		// 		this.videoRef.current.removeEventListener("mozfullscreenchange", this.closePopupVideo);
		// 		this.videoRef.current.removeEventListener("webkitfullscreenchange", this.closePopupVideo);
		// 		this.videoRef.current.removeEventListener("msfullscreenchange", this.closePopupVideo);
		// 		this.closePopupVideo();
		// 	}
		// }
	}

	playVideoFullScreen(){
		// if(window.innerWidth < 1000){
		// 	let requestFullscreen = this.videoRef.current.requestFullscreen || 
		// 							this.videoRef.current.mozRequestFullScreen || 
		// 							this.videoRef.current.webkitRequestFullscreen ||
		// 							this.videoRef.current.msRequestFullscreen;
		// 	if (requestFullscreen) {
		// 		requestFullscreen.bind(this.videoRef.current)();
		// 		this.videoRef.current.addEventListener("fullscreenchange", this.cancelFullScreen);
		// 		this.videoRef.current.addEventListener("mozfullscreenchange", this.cancelFullScreen);
		// 		this.videoRef.current.addEventListener("webkitfullscreenchange", this.cancelFullScreen);
		// 		this.videoRef.current.addEventListener("msfullscreenchange", this.cancelFullScreen);
		// 	}
		// }
	}

	render(){
		return(
			<section className="page page-home">
				<SEO data={this.props.data.seo} routeParams={this.props.routeParams}/>

				<Ornaments all={true}/>
				<Cover title={this.props.data.cover.titleHtml} video={videoCover} image={imageCover}
					showPopUp={this.openPopupVideo}
				/>
				<SpecialText text={this.props.data.specialText.text} svg={this.digitalSvg} svgText={"digital"} description={this.props.data.specialText.description}/>
				{this.state.textAndWindowsData.map((value, index) => {
					return <TextAndWindows key={index} data={value}/>
				})}
				{/*<LogoCarousel text={this.state.logosText} logos={[{url:airbnb}, {url:uber}, {url:nytimes}, {url:amazon}, {url:adobe}, {url:facebook}, {url:atlassian}, {url:whatsapp}, {url:netflix}, {url:dropbox}, {url:nfl}, {url:instagram}]}/>*/}
				<LogoCarousel text={this.state.logosText} logos={[{url:logos}]}/>
				{/*<NextSection text={this.state.nextSectionData.text} link={this.state.nextSectionData.link}/>*/}
				{/*<NextSection title={this.state.nextSectionData.title} description={this.state.nextSectionData.description}/>*/}
				<div className={(this.state.popUpVisible)?"module-video-popup active":"module-video-popup"}>
				    <div className="popup-content">
				    	<div className="bg-curtain" onClick={this.closePopupVideo}></div>
					    <video playsInline controls className="media-video" src={videoBB} ref={this.videoRef} preload="none"
							onClick={this.toggleVideo}
							onEnded={this.toggleVideo}
					    ></video>
				        <div className="close-container custom-cursor" onClick={this.closePopupVideo}>
							<div className="line line-1"></div>
							<div className="line line-2"></div>
							<div className="line line-3"></div>
				        </div>
			        </div>
		      	</div>
				<NextSection text={this.state.nextSectionData.text} link={this.state.nextSectionData.link}/>

			</section>
		);
	}
}


export default pageHome;

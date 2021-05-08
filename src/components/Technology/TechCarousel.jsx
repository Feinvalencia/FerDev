import React, {Component} from "react";
import {TweenMax, Power0} from "gsap/TweenMax";
import TitleWindowDescription from "./TitleWindowDescription";

// import GeneralAnimations from '../../utils/generalAnimations';

class Carousel extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			x: window.innerWidth*0.40,
			activeMove: false,
			maxX: undefined,
			blockMove: false,
			padding: 0,
		}
		this.listItems = [];	
		this.myRef = React.createRef();
		let cursorX;
		this.move = this.move.bind(this);
		this.up = this.up.bind(this);
		this.down = this.down.bind(this);
		this.calculateMaxX = this.calculateMaxX.bind(this);
		this.resize = this.resize.bind(this);
	}

	componentDidMount(){
		this.listItems = this.myRef.current.querySelectorAll('.title-window-description-container');
		this.setState({x: window.innerWidth*0.5-this.listItems[0].offsetWidth*0.5})
		document.addEventListener('mouseup', this.up);
		document.addEventListener('mousemove', this.move);
		document.addEventListener('touchend', this.up);
		document.addEventListener('touchmove', this.move);
		window.addEventListener('resize', this.resize);
	}

	componentWillUnmount(){
		document.removeEventListener('mouseup', this.up);
		document.removeEventListener('mousemove', this.move);
		document.removeEventListener('touchend', this.up);
		document.removeEventListener('touchmove', this.move);
		window.removeEventListener('resize', this.resize);
	}

	resize(){
		this.setState({maxX: undefined})
	}

	down(event){
		if(!this.state.blockMove){
			// this.cursorX = this.state.x + event.screenX;
			// if(this.state.maxX === undefined){
			// 	this.calculateMaxX();
			// }
			// this.cursorX = Math.max( Math.min(window.innerWidth*0.40, event.screenX - this.state.x ), this.state.maxX);
			if(event.touches !== undefined){
				this.cursorX = event.touches[0].clientX;
			}else{
				// this.cursorX = event.screenX;
				this.cursorX = event.pageX;
				// $(event.currentTarget).parent().addClass("grabbing"); // Cambiamos el cursor 
			}

			let middleWindow = window.innerWidth*0.5;
			let padding = 0;
			for (let i = 0; i < this.listItems.length; i++) {
				let item = this.listItems[i];
				let itemRect = item.getBoundingClientRect();
				if(itemRect.left <= middleWindow && itemRect.right >= middleWindow){
					padding = 3*(i*2+1)
				}
			}
			this.setState({activeMove:true, padding: padding});
		}
	}

	up(event){
		this.setState({activeMove:false,padding: 0, blockMove: false });
		// Para centrar el elemento 
		// if(this.state.activeMove){
		// 	this.setState({activeMove:false,padding: 0, blockMove: true }, ()=>{
		// 		let middleWindow = window.innerWidth*0.5;
		// 		let offset = 0;
		// 		let itemWidth = window.innerWidth*0.47;
		// 		if(window.innerWidth <= 760){
		// 			itemWidth = window.innerWidth*0.70;
		// 		}
		// 		for (let i = 0; i < this.listItems.length; i++) {
		// 			let item = this.listItems[i];
		// 			let itemRect = item.getBoundingClientRect();
		// 			if((itemRect.left <= middleWindow && itemRect.right >= middleWindow) ||
		// 				(itemRect.left <= middleWindow && itemRect.right <= middleWindow)){
		// 				offset = (window.innerWidth*0.5 - itemWidth*0.5) - (i*itemWidth) ;
		// 			}
		// 		}

		// 		this.setState({x: offset}, ()=>{
		// 			setTimeout(()=>{
		// 				this.setState({blockMove: false});
		// 			}, 500);
					
		// 		});

		// 		// TweenMax.to(this.myRef.current.querySelector(".carousel-content"), 0.4,{x: offset+"px", onComplete:()=>{
		// 		// 	this.setState({x: offset, blockMove: false});
		// 		// }})
		// 	});
		// }
	}



	move(event){
		if(this.state.activeMove ){
			if(this.state.maxX === undefined){
				this.calculateMaxX();
			}
			let posNow;
			let factor = 1;
			if(event.touches !== undefined){
				posNow = event.touches[0].clientX;
				factor = 1.5;
			}else{
				posNow = event.pageX;
			}
			let displacement = (posNow - this.cursorX)*factor;
			let posX = Math.max( Math.min(window.innerWidth*0.5-this.listItems[0].offsetWidth*0.5, this.state.x + displacement), this.state.maxX);
			this.cursorX = posNow;
			// let posX = Math.max( Math.min(window.innerWidth*0.40, (this.cursorX - event.screenX)*-1), this.state.maxX);
			this.setState({x:posX});
		}
	}

	calculateMaxX(){	
		let max = this.myRef.current.clientWidth - this.myRef.current.querySelector('.carousel-content').clientWidth;
		this.setState({maxX:max - window.innerWidth*0.3});
	}

		
	render(){
		let movingClass = "";
		if(this.state.activeMove){
			movingClass = " active-move";
		}

		if(this.state.blockMove){
			movingClass = " block-move";
		}
		return(
			<div className="module module-tech-carousel" ref={this.myRef}>
				<div className="module-title-container">
					<div className="medium-width">
						<p className="subtitle font-h1 font-center font-border font-white js-animate">{this.props.title}</p>
					</div>
				</div>
				<div className="carousel-container-wrapper" 
					onMouseDown={this.down}
					onTouchStart={this.down}
					// onMouseUp={this.up}
					// onMouseMove={this.move}
				>
					<div className={"carousel-container "+movingClass}>
						<div className="carousel-content js-animate" style={{transform: "translateX("+this.state.x+"px)", paddingLeft: this.state.padding+"vw"}}>
							{this.props.contentList.map((item, index) => {
								return <TitleWindowDescription title={item.title} mediaSrc={item.img} description={item.description} key={index}/>;
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Carousel;
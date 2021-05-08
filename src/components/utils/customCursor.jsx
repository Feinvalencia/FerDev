import React, {Component} from "react";

import {TweenMax, TweenLite, Power2, Power4, Power0, Power1, TimelineMax, Back, Elastic} from "gsap/TweenMax";
//////////////////////////////////////////////////////////////////
////////////////////// CUSTOM CURSOR /////////////////////////////
//////////////////////////////////////////////////////////////////

/*
	Cursor Types:
		- Cursor General Link -> Change cursor dot size 
		- Cursor Work -> Cursor with 2 text lines
		- Cursor Video -> Show play pause text
		- Cursor Text -> Show text

	Other options:
		- data-cursor-color -> Font color
*/

class CustomCursor extends Component{
	constructor(props){
		super(props);
		this.state = {
			cursorLeftPos: undefined,
			cursorTopPos: undefined,
			cursorFixed: false,
			cursorMagnet: false,
		}

		this.$cursor = React.createRef();

		this.refreshPositionCustomCursor = this.refreshPositionCustomCursor.bind(this);
		this.cursorIn = this.cursorIn.bind(this);
		this.cursorOut = this.cursorOut.bind(this);
		this.magnetionCursorON = this.magnetionCursorON.bind(this);
		this.magnetionCursorOFF = this.magnetionCursorOFF.bind(this);
		this.magnetionCursor = this.magnetionCursor.bind(this);
		this.displayCursorImage = this.displayCursorImage.bind(this);
		
		this.bindEvents = this.bindEvents.bind(this);
		this.unBindEvents = this.unBindEvents.bind(this);

		
	}


	componentDidMount(){
		

			this.bindEvents();

			window.addEventListener("navigation", ()=>{
				this.cursorOut();
				this.unBindEvents();
			});

			window.addEventListener("navigationClick", ()=>{
				this.bindEvents();
			});
		
	}

	bindEvents(){

		document.body.addEventListener("mouseenter", (event)=>{
			if(event.target && event.target.matches(".custom-cursor, a[href]")){
				this.cursorIn(event);
			}
		}, true);

		document.body.addEventListener("mouseleave", (event)=>{
			if(event.target && event.target.matches(".custom-cursor, a[href]")){
				this.cursorOut(event);
			}
		}, true);

		window.document.addEventListener("mousemove", this.refreshPositionCustomCursor, true);
		
		/*
		let elemList = document.body.querySelectorAll(".custom-cursor, a[href]");
		for (let i = 0; i < elemList.length; i++) {
			elemList[i].addEventListener("mouseenter", this.cursorIn, true);
			elemList[i].addEventListener("mouseleave", this.cursorOut, true);
		}
		*/
		

		let elemList = document.body.querySelectorAll('.custom-cursor[data-cursor=magnet-link]');
		for (let i = 0; i < elemList.length; i++) {
			elemList[i].addEventListener("mouseenter", this.magnetionCursorON, true);
			elemList[i].addEventListener("mouseleave", this.magnetionCursorOFF, true);
			elemList[i].addEventListener("mousemove", this.magnetionCursor, true);
		}
	}

	unBindEvents(){
		window.document.removeEventListener("mousemove", this.refreshPositionCustomCursor);
		
		let elemList = document.body.querySelectorAll(".custom-cursor, a[href]");
		for (let i = 0; i < elemList.length; i++) {
			elemList[i].removeEventListener("mouseenter", this.cursorIn);
			elemList[i].removeEventListener("mouseleave", this.cursorOut);
		}
		

		elemList = document.body.querySelectorAll('.custom-cursor[data-cursor=magnet-link]');
		for (let i = 0; i < elemList.length; i++) {
			elemList[i].removeEventListener("mouseenter", this.magnetionCursorON);
			elemList[i].removeEventListener("mouseleave", this.magnetionCursorOFF);
			elemList[i].removeEventListener("mousemove", this.magnetionCursor);
		}	
	}


	displayCursorImage(event){
		let $cursorImage = this.$cursor.current.querySelector(".cursor-image-container");		
		let $img= $cursorImage.querySelector("img");
		let newSrc = event.target.getAttribute("data-image-src") ;
		$img.setAttribute("src", newSrc );
	
		this.$cursor.current.classList.add("cursor-image");		
	}

	refreshPositionCustomCursor(event){
		this.cursorLeftPos = event.clientX;
		this.cursorTopPos = event.clientY;
		let $cursor = this.$cursor.current;
		if(!this.cursorFixed){
			TweenMax.to($cursor, 0.4,{"left": this.cursorLeftPos+"px", "top": this.cursorTopPos+"px", ease: Back.easeOut.config(3), delay: 0.1});
		}
	}

	cursorIn(event){
		// var $target = $(event.currentTarget);
		let $target = event.target;
		let type = $target.getAttribute("data-cursor-type");
		// if($target && $target.data("cursor-color")){
		// 	$cursor.find("p").css({"color": $target.data("cursor-color")});
		// }

		switch (type){
			// case "work":
			// 	$cursor.find(".line1").text($(event.currentTarget).data("cursor-line1"));
			// 	$cursor.find(".line2").text($(event.currentTarget).data("cursor-line2"));
			// 	$cursor.addClass("cursor-work");
			// 	break;
			// case "play":
			// 	var status = $(event.currentTarget).data("cursor-video-status") || "play";
			// 	var text = "Play";
			// 	if(status === "playing"){
			// 		text = "Pause";
			// 	}
			// 	$cursor.find(".play-text").text(text);
			// 	$cursor.addClass("cursor-play");
			// 	break;
			// case "cursor-text":
			// 	$cursor.find(".cursor-text .text").text($(event.currentTarget).data("text"));
			// 	$cursor.addClass("cursor-text");
			// 	break;
			case "cursor-image":
				this.displayCursorImage(event);
				break;
			case "magnet-link":
				this.magnetionCursorON();
				break;
			default:
				this.$cursor.current.classList.add("cursor-select");
				break;
		}
	}

	cursorOut(){
		let $cursor = this.$cursor.current;

		// $cursor.find(".line1").text("");
		// $cursor.find(".line2").text("");
		// if( $cursor.find(".image").length > 0){
		// 	$cursor.find(".image")[0].src = "";
		// }
		// $cursor.classList.remove("cursor-work");
		// $cursor.classList.remove("cursor-play");
		// $cursor.classList.remove("cursor-text");
		$cursor.classList.remove("cursor-image");
		$cursor.classList.remove("cursor-select");
	}

	magnetionCursorON(event){
		this.cursorMagnet = true;
	}

	magnetionCursor(event){
		if(this.cursorMagnet){
			let $element = event.currentTarget;

			let widthPos= $element.offsetWidth;
			let heightPos= $element.offsetHeight;
			let leftPos = this.cursorLeftPos - $element.getBoundingClientRect().left - widthPos/2;
			let topPos = this.cursorTopPos  - $element.getBoundingClientRect().top - heightPos/2;

			TweenMax.to($element, 1.4,{x: leftPos, y:topPos, ease: Back.easeOut.config(3)});
		}
	}

	magnetionCursorOFF(event){
		this.cursorMagnet= false;
		TweenMax.to(event.currentTarget, 0.8,{x: 0, y:0, ease: Elastic.easeOut.config(1, 0.4)});

	}

/*
	deactivateCursor(){
		("*").css("cursor","none");
	}

	activateCursor(){
		$("*").css("cursor","");
	}
*/


	render(){
		return <div className="cursor-container" ref={this.$cursor}>
			<div className="cursor"></div>
			<div className="cursor-text-container cursor-work">
				<p className="line1 font-h3 font-white">Small Text</p>
				<p className="line2 font-h1 font-white">Large Text</p>
			</div>
			<div className="cursor-text-container cursor-play">
				<p className="play-text font-p2 font-white">Play</p>
			</div>
			<div className="cursor-text-container cursor-text">
				<p className="text font-h2 font-white"></p>
			</div>
			<div className="cursor-image-container">
				<img src="" alt="" className="image" />
			</div>
		</div>
	}


}

export default CustomCursor;
//////////////////////////////////////////////////////////////////
//////////////////////   END CURSOR   ////////////////////////////
//////////////////////////////////////////////////////////////////
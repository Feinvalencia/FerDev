import {TweenMax, TweenLite, Power2, Power0, Power1} from "gsap/TweenMax";
import SplitText from "../plugins/SplitText";
// import DrawSVG from "../plugins/DrawSVGPlugin";
import CustomEase from "../plugins/CustomEase";

const ScrollAnimations = {

	imageObserver: null,

	iniObserver(){
		let elements = null;
		let delay= 800;
		let rootMargin= "0px 0px -"+window.innerHeight*0.15+"px 0px";
		 let options = {
		    delay: 100,
		   root: document.querySelector('.body-content'),
		   rootMargin: '-100px 0px',
		   threshold: 0,
		   // trackVisibility: true,
		 }
		if(ScrollAnimations.imageObserver === null){
			delay=0;
			ScrollAnimations.imageObserver = new IntersectionObserver(
				(entries, observer) => { 
				entries.forEach(entry => {
				    ScrollAnimations.animateGeneralElementsObserver(entry, ScrollAnimations.imageObserver);
				  });
				}, 
				{rootMargin: rootMargin}
			);
		}

		if(window.innerWidth > 800){
			elements = document.querySelectorAll('.js-animate');
		}else{
			elements = document.querySelectorAll('.js-animate[data-animation-type=video-play]');
		}
		
		if(window.innerWidth >= 200 || window.innerHeight >= 200){
			setTimeout(()=>{
				elements.forEach(target => { 
					ScrollAnimations.imageObserver.observe(target) 
				});
			}, delay);
		}
	},



	prepareGeneralAnimations(){
		if(window.innerWidth <= 800 && window.innerWidth >= 200){ return null;}
		// let elements = options["animables"];
		let elements = document.querySelectorAll(".js-animate:not(.js-animated)");
		
		for (let i = 0; i < elements.length; i++){
			// let elem = $(elements[i]);
			let elem = elements[i];
			// elem.classList.remove("js-animated");
			if(elem.getAttribute("data-animation-type") === "top-opacity"){
				TweenLite.set(elem, {opacity: 0, y: 40});
			}else if(elem.getAttribute("data-animation-type") === "bottom-opacity"){
				TweenLite.set(elem, {opacity: 0, y: -40});
			}else if(elem.getAttribute("data-animation-type") === "right-opacity"){
				TweenLite.set(elem, {opacity: 0, x: -40});
			}else if(elem.getAttribute("data-animation-type") === "left-opacity"){
				TweenLite.set(elem, {opacity: 0, x: 40});
			}else if(elem.getAttribute("data-animation-type") === "left-opacity-header"){
				TweenLite.set(elem, {opacity: 0, y: 20});
			}else if(elem.getAttribute("data-animation-type") === "header-animation"){
				if (!elem.value){
					let splitText = new SplitText(elem, {type: 'lines,words', linesClass:'line'});
					TweenMax.set(splitText.words, {y:"102%"});
					elem.value = splitText;
				}
			}else if(elem.getAttribute("data-animation-type") === "large-serif"){
				if(!elem.value){
					let splitLine = new SplitText(elem, {type: 'lines', linesClass: 'line'});
					let splitText = [];
					for (let j = 0; j < splitLine.lines.length; j++) {
						splitText.push(new SplitText(splitLine.lines[j], {type: 'words,chars'}))
						TweenMax.set(splitText[j].chars, {y:"100%", opacity: 0});
					}
					elem.value = splitText;
				}
			}else if(elem.getAttribute("data-animation-type") == "letter-svg"){
				/* prepareLetterSvg(elem); */
			}else if(elem.getAttribute("data-animation-type") == "special-text"){
				prepareSpecialText(elem);
			}else if(elem.getAttribute("data-animation-type") === "split-line-text"){
				TweenLite.set(elem, {opacity: 0});
			}else if(elem.getAttribute("data-animation-type") === "cover-animation"){
				var title= elem.querySelector(".title");
				var subtitle= elem.querySelector(".subtitle");
				var logo= elem.querySelector(".logo-play");
				var video= elem.querySelector(".media-video");
				var img= elem.querySelector(".media-img");
				prepareSplitLineText(title);				
				if(logo !== null){
					TweenLite.set(logo, {y: 40, opacity: 0});
				}
				if(subtitle !== null){
					TweenLite.set(subtitle, {y:40, opacity: 0});
				}
				if(video !== null){
					TweenLite.set(video, {opacity: 0, y: 40});
				}
				if(img !== null){
					TweenLite.set(img, {opacity: 0, y: 40});
				}
			}else if(elem.getAttribute("data-animation-type") === "ornaments"){
				let list = elem.querySelectorAll(".item");
				TweenMax.set(list,{y: 40, opacity: 0});
			}else if(elem.getAttribute("data-animation-type") === "expand"){
				// let windowBody = elem.querySelector(".window-body");
				// windowBody.value = windowBody.offsetHeight;
				// TweenMax.set(windowBody,{height: 0});
				TweenMax.set(elem.querySelector("p"),{scaleY: 0, "transform-origin": "top"});
			}else if(elem.getAttribute("data-animation-type") === "number-window"){
				let _x=-20;
				if(elem.classList.contains("window-right")){
					_x = _x*-1;
				}

				let img = elem.querySelector(".window-box");
				let number = elem.querySelector(".number");
				let title = elem.querySelector(".title");
				let text = elem.querySelector(".text");

				TweenMax.set(img,{opacity: 0, x:_x});
				TweenMax.set(number,{opacity: 0});
				TweenMax.set([title, text],{opacity: 0, y:20});
			}else{
				TweenLite.set(elem, {opacity: 0});
			}

			let dotList = elem.querySelectorAll(".window-header .dot");
			if(dotList.length > 0){
				TweenLite.set(dotList, {opacity: 0, x: -20});
			}
		};
		//All elements prepared
		// $("body").addClass("js-animations-loaded");
		// let elements = document.getElementsByClassName("js-animations-loaded");
		// elements.classList.add("js-animations-loaded");
	},

	animateGeneralElements(){
		if(window.innerWidth <= 800 && window.innerWidth >= 200){ return null;}

		let screenBottom = window.scrollY + window.innerHeight * 1; 
		let screenTop = window.scrollY + window.innerHeight * 0;

		// let elements = $(".js-animate:not(.js-animated)");
		let elements = document.querySelectorAll(".js-animate:not(.js-animated)");

		let myDelay = 0.2;
		let myTime = 0.8;

		let j =0;
		for (let i = 0; i < elements.length; i++){
			let elem = elements[i];
			let body = document.body;
			let elemOffsetTop = elem.getBoundingClientRect().top + window.scrollY;
			
			if( (elemOffsetTop < screenTop && (elemOffsetTop+elem.offsetHeight) > screenBottom) ||
				( ((elemOffsetTop < screenBottom && elemOffsetTop >= screenTop)) ||
				((elemOffsetTop+elem.offsetHeight) < screenBottom && (elemOffsetTop+elem.offsetHeight) > screenTop) ||
				(window.scrollTop + window.offsetHeight >= body.offsetHeight - 65) )
			){
				j = j+0.2;
				myDelay = j;
				
				elem.classList.add("js-animated");
				if(elem.getAttribute("data-animation-type") === "top-opacity" || elem.getAttribute("data-animation-type") === "bottom-opacity"){
					TweenLite.to(elem, myTime, {opacity: 1, y: 0,  ease: Power2.easeOut, delay: myDelay});
				}else if(elem.getAttribute("data-animation-type") === "left-opacity" || elem.getAttribute("data-animation-type") === "right-opacity"){
					TweenLite.to(elem, myTime, {opacity: 1, x: 0,  ease: Power2.easeOut, delay: myDelay});
				}else if(elem.getAttribute("data-animation-type") === "left-opacity-header" || elem.getAttribute("data-animation-type") === "right-opacity-header"){
					TweenLite.to(elem, myTime, {opacity: 1, y: 0,  ease: Power2.easeOut, delay: myDelay*0.75},);
				}else if(elem.getAttribute("data-animation-type") === "header-animation"){
					let splitText = elem.value;
					TweenMax.to(splitText.words, myTime*2, {y: "0%", ease: Power2.easeInOut, delay: myDelay});
				}else if(elem.getAttribute("data-animation-type") === "large-serif"){
					myDelay = animateLargeSerif(elem, myTime, myDelay);
				}else if(elem.getAttribute("data-animation-type") === "split-line-text"){
					myDelay = animateSplitLineText(elem, myTime, myDelay);
				}else if(elem.getAttribute("data-animation-type") == "letter-svg"){
					let $svgTypo = elem.querySelector("svg");
					let paths = $svgTypo.querySelectorAll(".animate-path-container path");
					let delayB = myDelay + myTime;
					let _ease = Power1.easeIn;
					paths.forEach(function(item, i){
						// let time = $(item).data("time");
						let time = item.value;
						TweenMax.to(item, time, {strokeDashoffset: 0, ease:_ease, delay: myDelay, onStart:function(){
							
						}});
						delayB+=time;
						if(i === paths.length-2){
							_ease = Power1.easeOut;
						}else{
							_ease = Power0.easeNone;
						}
					});

				
				}else{
					TweenLite.to(elem, myTime, {opacity: 1, ease: Power2.easeInOut, delay: myDelay});
				}
			}
		};
	},

	animateGeneralElementsObserver(elem, observer){
		if(elem.isIntersecting && elem.target.getAttribute("data-animation-type") === "video-play"){
			elem.target.play();
		}else if(window.innerWidth <= 800 && window.innerWidth >= 200){
			return null;
		}


		let myDelay = 0.2;
		let myTime = 1.2;
		let j =0;
		let body = document.body;
		if(  elem.isIntersecting ) {
			elem = elem.target;
			observer.unobserve(elem);
		
			j = j+0.2;
			myDelay = j;
			elem.classList.add("js-animated");
			let extraDelay = Number(elem.getAttribute("data-animation-delay"));
			myDelay += extraDelay;
			if(elem.getAttribute("data-animation-type") === "top-opacity" || elem.getAttribute("data-animation-type") === "bottom-opacity"){
				TweenLite.to(elem, myTime, {opacity: 1, y: 0,  ease: Power2.easeOut, delay: myDelay});
			}else if(elem.getAttribute("data-animation-type") === "left-opacity" || elem.getAttribute("data-animation-type") === "right-opacity"){
				TweenLite.to(elem, myTime, {opacity: 1, x: 0,  ease: Power2.easeOut, delay: myDelay});
			}else if(elem.getAttribute("data-animation-type") === "left-opacity-header" || elem.getAttribute("data-animation-type") === "right-opacity-header"){
				TweenLite.to(elem, myTime, {opacity: 1, y: 0,  ease: Power2.easeOut, delay: myDelay*0.75},);
			}else if(elem.getAttribute("data-animation-type") === "header-animation"){
				let splitText = elem.value;
				TweenMax.to(splitText.words, myTime*2, {y: "0%", ease: Power2.easeInOut, delay: myDelay});
			}else if(elem.getAttribute("data-animation-type") === "large-serif"){
				myDelay = animateLargeSerif(elem, myTime, myDelay);
			}else if(elem.getAttribute("data-animation-type") === "split-line-text"){
				prepareSplitLineText(elem);
				TweenLite.set(elem, {opacity: 1});				
				myDelay = animateSplitLineText(elem, myTime+0.7, myDelay);
			}else if(elem.getAttribute("data-animation-type") == "letter-svg"){
				/* myDelay = animateLetterSvg(elem, myTime, myDelay); */

			}else if(elem.getAttribute("data-animation-type") == "special-text"){
				myDelay = animateSpecialText(elem, myTime, myDelay);

			}else if(elem.getAttribute("data-animation-type") === "cover-animation"){
				var title= elem.querySelector(".title");
				var subtitle= elem.querySelector(".subtitle");
				var logo= elem.querySelector(".logo-play");
				var video= elem.querySelector(".media-video");
				var img= elem.querySelector(".media-img");

				let delayB= myDelay + 0;
				let delayInterval = 0.3;
				let easeB = cubicBezier(".31,.01,.06,1");
				delayB = animateSplitLineText(title, myTime+0.7, delayB);
				
				delayB+=1;

				if(logo !== null){
					TweenLite.to(logo, 0.5, {opacity: 1, y: 0, ease: Power0.easeNone, delay: delayB});
					delayB+=delayInterval;
				}
				if(subtitle !== null){
					TweenLite.to(subtitle, 0.5, {opacity: 1, y:0, ease: Power0.easeNone, delay: delayB});
					delayB+=delayInterval;
				}

				if(video !== null){
					TweenLite.to(video, myTime*0.8, {opacity: 1, y: 0,  ease: Power2.easeOut, delay: delayB});
					delayB+=delayInterval;
				}
				if(img !== null){
					TweenLite.to(img, myTime*0.8, {opacity: 1, y: 0,  ease: Power2.easeOut, delay: delayB});
					delayB+=delayInterval;
				}
				myDelay= delayB;

			}else if(elem.getAttribute("data-animation-type") === "ornaments"){
				var myEase= cubicBezier(".31,.01,.06,1");
				let list = elem.querySelectorAll(".item");
				TweenMax.staggerTo(list, 1.2,{y:0, opacity: 1, delay: myDelay, ease: myEase}, 0.3);
			}else if(elem.getAttribute("data-animation-type") === "expand"){
				// let windowBody = elem.querySelector(".window-body");
				// TweenMax.to(windowBody, 0.6, {height: windowBody.value, ease: cubicBezier(".31,.01,.06,1"), delay: myDelay});	
				TweenMax.to(elem.querySelector("p"),0.6, {scaleY: 1, ease: cubicBezier(".31,.01,.06,1"), delay: myDelay});	
			}else if(elem.getAttribute("data-animation-type") === "number-window"){
				let img = elem.querySelector(".window-box");
				let number = elem.querySelector(".number");
				let title = elem.querySelector(".title");
				let text = elem.querySelector(".text");

				TweenMax.to(img, 1, {opacity: 1, x: 0, ease: cubicBezier(".31,.01,.06,1"), delay: myDelay});
				TweenMax.to(number, 1, {opacity: 1, ease: cubicBezier(".31,.01,.06,1"), delay: myDelay + 0.1});
				TweenMax.to(title, 1, {opacity: 1, y: 0, ease: cubicBezier(".31,.01,.06,1"), delay: myDelay + 0.2});
				TweenMax.to(text, 1, {opacity: 1, y: 0, ease: cubicBezier(".31,.01,.06,1"), delay: myDelay + 0.3});
					
			}else{
				TweenLite.to(elem, myTime, {opacity: 1, ease: Power2.easeInOut, delay: myDelay});
			}

			let dotList = elem.querySelectorAll(".window-header .dot");
			if(dotList.length > 0){
				TweenMax.staggerTo(dotList,myTime, {opacity: 1, x: 0, ease: cubicBezier(".31,.01,.06,1"), delay: myDelay}, 0.2);
			}
		}
	},


	animateGeneralElementsOut(){
		if(window.innerWidth <= 800 && window.innerWidth >= 200){ return 0;}

		let elements = document.querySelectorAll(".js-animated:not(.js-not-animate-out), .js-animate-out");
		let myDelayOut = 0;
		let myTimeOut = 0.8;
		// let j=0;
		let body = document.body;
		let screenBottom = window.scrollY + window.innerHeight * 1; 
		let screenTop = window.scrollY + window.innerHeight * 0;
		
		/*TweenLite.to('header.header', 0.8, {opacity: 0, y: 20,  ease: Power2.easeOut});*/


		for(let i = elements.length-1 ; i >= 0; i--){
			let elem = elements[i];
			let elemOffsetTop = elem.getBoundingClientRect().top + window.scrollY;
			
			if( ( ((elemOffsetTop < screenBottom && elemOffsetTop > screenTop)) ||
				((elemOffsetTop+elem.offsetHeight) < screenBottom && (elemOffsetTop+elem.offsetHeight) > screenTop) ||
				(window.scrollTop + window.offsetHeight >= body.offsetHeight - 65) )
			){
				if(elem.getAttribute("data-animation-type") === "left-opacity"){
					TweenLite.to(elem, myTimeOut, {opacity: 0, x: 40,  ease: Power2.easeOut, delay: myDelayOut});
				}else{
					TweenLite.to(elem, myTimeOut, {opacity: 0, y: 40,  ease: Power2.easeOut, delay: myDelayOut});
				}
				// j = j+0.2;
				// myDelayOut = j;
			}
		}
		return myTimeOut+myDelayOut;
	}
}

export default ScrollAnimations;

function cubicBezier(bezier){
	return CustomEase.create("custom", "M0,0,C"+bezier+",1,1");
}

function animateLargeSerif(elem, myTime, myDelay){
	let splitText = elem.value;
	for (let i = 0; i < splitText.length; i++) {
		TweenMax.staggerTo(splitText[i].chars, 1.5, {y: "0%", opacity: 1, ease: CustomEase.create("custom", "M0,0 C0.085,0.259 0.122,0.989 0.306,1.04 0.386,1.062 0.505,0.955 0.658,0.984 0.83,1.016 0.818,1 1,1"), delay: i*0.15}, 0.015);
		myDelay = 2+i*0.15;
	};
	return myDelay;

}

function prepareSplitLineText(elem){
	if(!elem.value){
		let splitText = [];
		if(elem.innerText !== ''){
			splitText = new SplitText(elem, {type: 'lines', linesClass: 'line'});
		}else{ // Esto es para aplicarlo a elementos que no sean de tipo texto
			splitText = {lines: [elem]};
		}
		TweenMax.set(splitText.lines, {y:function(i){
			return 20 *(i+1) + 20 * i;
		}, opacity: 0, rotationZ: -5, transformOrigin:"right top"});
		TweenMax.set(elem,{'pointer-events':'none'});
		elem.value = splitText;
	}
}

function animateSplitLineText(elem, myTime, myDelay){
	// var myEase= cubicBezier(".31,.01,.06,1");
	var myEase= Power2.easeOut;

	let splitText = elem.value;

	// for (let i = 0; i < splitText.length; i++) {
	// 	TweenMax.staggerTo(splitText[i].chars, 1.5, {y: "0%", opacity: 1, rotationZ: 0, ease: myEase, delay: i*0.15}, 0.015);
	// 	myDelay = 2+i*0.15;
	// };
	// return myDelay;
	
	if(splitText){
		TweenMax.staggerTo(splitText.lines, myTime, {y: 0, opacity: 1, rotationZ: 0, ease: myEase, delay: myDelay}, 0.02);
	}
	

	TweenMax.to(elem,myTime,{clearProps: 'pointer-events'});
	if(elem.getAttribute('data-split-delay') != undefined){
		return Number(elem.getAttribute('data-split-delay'));
	}else{
		var delay= splitText.lines.length * 0.015 + myTime*.25;
		return delay;
		// return Math.round(delay * 100) / 100;	
	}

}

/* function prepareLetterSvg(elem){
	let $svgTypo = elem.querySelector("svg");
	let paths = $svgTypo.querySelectorAll(".animate-path-container path");
	paths.forEach(function(item,i){
		let length = item.getTotalLength();
		length = Math.ceil(length);
		item.style['strokeDasharray'] = length;
		item.style['strokeDashoffset'] = length;
		let time = length/4500;
		// $(item).data("time", time);
		item.value = time;
	});			
}
 */

/* function animateLetterSvg(elem, myTime, myDelay){
	let $svgTypo = elem.querySelector("svg");
	let paths = $svgTypo.querySelectorAll(".animate-path-container path");
	let delayB = myDelay + myTime;
	let _ease = Power1.easeIn;
	paths.forEach(function(item, i){
		// let time = $(item).data("time");
		let time = item.value;
		TweenMax.to(item, time, {strokeDashoffset: 0, ease:_ease, delay: delayB, onStart:function(){
			
		}});
		delayB+=time;
		if(i === paths.length-2){
			_ease = Power1.easeOut;
		}else{
			_ease = Power0.easeNone;
		}
	});
	return delayB;
}
 */
function prepareSpecialText(elem){
	let splitElem = elem.querySelector(".font-border");
	let letterSvgElem = elem.querySelector(".letter-svg-container");
	let description = elem.querySelector(".text-description");
	// prepareSplitLineText(splitElem);
	TweenLite.set(splitElem, {opacity: 0});
	splitElem.classList.add("hover-border");
	/* prepareLetterSvg(letterSvgElem); */
	TweenLite.set(description, {opacity: 0, x: -40});
}


function animateSpecialText(elem, myTime, myDelay){
	let splitElem = elem.querySelector(".font-border");
	let letterSvgElem = elem.querySelector(".letter-svg-container");
	let description = elem.querySelector(".text-description");
	let delayB;
	prepareSplitLineText(splitElem);
	TweenLite.set(splitElem, {opacity: 1});
	delayB = animateSplitLineText(splitElem, myTime+0.7, myDelay);
	setTimeout(function(){
		splitElem.classList.remove("hover-border");
	}, (delayB+1)*1000)
	// delayB = animateLetterSvg(letterSvgElem, myTime, delayB-0.3);
	/* animateLetterSvg(letterSvgElem, myTime, delayB-0.5); */
	TweenLite.to(description, myTime, {opacity: 1, x: 0,  ease: Power2.easeOut, delay: delayB});
	return delayB;
}



export function animateScrollY(position){
	let scroll = {left:window.scrollX, top: window.scrollY}
	let header = document.querySelector('.header');
	position -= header.offsetHeight;
	TweenLite.to(scroll, 1, {top: position, ease: Power2.easeOut, onUpdate:()=>{window.scrollTo(scroll.left, scroll.top)}});
}

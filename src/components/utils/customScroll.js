import {TweenLite} from "gsap/TweenMax";
import scrollAnimations from './generalAnimations';

/*
|- .body -> get <.body-wrapper> height by JS
|- .body-content -> viewport fixed
|- .body-wrapper -> size of website

<style>

	.body-content{
		position: fixed;
		display: block;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
	}

</style>
	

	animateType{
		0: normal,
		1: exhaustive animations,
	}
*/
function customScroll(_options){
	var html = document.documentElement;
	var body = document.body;
	var scroller = {
		target: document.querySelector(".body-wrapper"),
		ease: 0.05, // <= scroll speed
		// ease: 0.03, // <= scroll speed
		endY: 0,
		y: 0,
		resizeRequest: 1,
		scrollRequest: 0,
		animateMode: 0,
		pointerMode: 0,
	};
	var requestId = null;

	var options = {};
	var defaultOptions = {
		
	}

	options = Object.assign(defaultOptions, _options);

	constructor();
	

	function constructor(){


		TweenLite.set(scroller.target, {
			rotation: 0.01,
			force3D: true
		});

		onLoad();

	}


	function onLoad() {    
		updateScroller();  
		window.focus();
		window.addEventListener("resize", onResize);
		document.addEventListener("scroll", onScroll); 
		body.addEventListener("changeBody", function(){
			scroller.ease = 1;
		});
		body.addEventListener("endChangeBody",function(){
			onResize();
		});

		body.addEventListener("startAnimateFirstScreen",function(){
			setAnimationMode(1);
		});

	}



	function updateScroller() {
		// setPointerMode(1);
		var resized = scroller.resizeRequest > 0;
		if (resized || true) {    
			var height = scroller.target.clientHeight;
			body.style.height = height + "px";
			scroller.resizeRequest = 0;
		}

		var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

		scroller.endY = scrollY;
		scroller.y += (scrollY - scroller.y) * scroller.ease;

		if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
			scroller.y = scrollY;
			scroller.scrollRequest = 0;
		}else{
			// onResize();
		}
		
		// console.log(scroller.y);
		// if (Math.abs(scrollY - scroller.y) < 0.5){
			TweenLite.set(scroller.target, { 
				y: -scroller.y 
			});
		// }

		requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;

		if(scroller.animateMode === 1){
			if(scrollAnimations !== undefined){
				scrollAnimations.animateGeneralElements();
			}
		}

		
	}

	function onScroll() {
		scroller.scrollRequest++;
		// console.log(Math.abs(scroller.target.clientHeight - body.clientHeight));
		// if(Math.abs(scroller.target.clientHeight - body.clientHeight) > 1){
			
		// }

		if (!requestId) {
			requestId = requestAnimationFrame(updateScroller);
		}
		
		
	}

	function onResize(){
		scroller.resizeRequest++;
		if (!requestId) {
			requestId = requestAnimationFrame(updateScroller);
		}
	}

	function setAnimationMode(x){
		scroller.animateMode = x;
	}

	function setPointerMode(x){
		scroller.pointerMode = x;
		var $elements = document.querySelectorAll("a");
		if(scroller.pointerMode === 0){
			$elements.css("pointer-events","");
		}else if(scroller.pointerMode === 1){
			$elements.css("pointer-events","none");
		}
	}

	this.onResize = onResize;
}


export default customScroll;
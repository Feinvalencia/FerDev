import {TweenMax, Power2} from "gsap/TweenMax";
// import scrollAnimations from './generalAnimations';

import {closest} from './functions';



function Parallax(_options){
	let body = document.body;
	var html = document.documentElement;

	//Para parallax
	// let lastScrollTop = 0;
	let iScrollPos = 0;

	// let goParallax = true;
	let enableParallax = true;

	// let options = {};
	// let defaultOptions = {
		
	// }

	// options = Object.assign(defaultOptions, _options);
	
	constructor();

	function constructor(){
		// $(window).scroll(parallaxMoveElements);
		window.addEventListener("scroll",parallaxMoveElements);

	}

	function parallaxMoveElements(event){
		// Recorremos todos los elementos con atributo data-pratio
		
		let $elements = document.querySelectorAll("*[data-pratio]");
		if( /*window.innerWidth > 750 &&*/ enableParallax){
			var direction = 1;
			// var iCurScrollPos = $("html").scrollTop();
			var iCurScrollPos = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

			if (iCurScrollPos > iScrollPos) { //Scrolling Up
		        direction = -1;
		    } else { //Scrolling Up
		       direction = 1;
		    }

		    iScrollPos = iCurScrollPos;
		    var ratio = 1;
			$elements.forEach( function(item, i) {
				var winScrollTop = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
				// var offsetTop = $($(item).closest(".parallax-content-parent")).offset().top;
				var offsetTop = closest(item, ".parallax-content-parent")
				offsetTop = offsetTop.offsetTop;
				var elementHeight = item.offsetHeight;
				var screenHeight = window.innerHeight;
				//Si el elemento se encuentra dentro de la pantalla, le aplicamos el parallax
				if(winScrollTop + screenHeight > offsetTop && offsetTop + elementHeight > winScrollTop){
					ratio = parseFloat( item.getAttribute("data-pratio") );
					// var newY = ratio * direction;
					var dir = item.getAttribute("data-parallax-direction");
					var currentScroll = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
					var newY;
					if(dir === "up"){
						if(offsetTop < screenHeight){
							newY = currentScroll * ratio * (-1);
						}else{
							newY = (currentScroll + screenHeight - offsetTop) * ratio  * (-1);
						}
					}else if(dir === "down"){
						if(offsetTop < screenHeight){
							newY = currentScroll * ratio;
						}else{
							newY = (currentScroll + screenHeight - offsetTop) * ratio;
						}
					}


					// if(tweenParallax == undefined){
					// 	var tweenParallax = TweenMax.to( $(item), 0.3, {y: newY, ease: Power2.easeOut } );
					// }else if(!tweenParallax.isActive()){
						// tweenParallax = TweenMax.to( $(item), 0.3, {y: newY, ease: Power2.easeOut } );
						TweenMax.to( item, 0.8, {y: newY, ease: Power2.easeOut } );
					// }
				}
			});	
		}
	}
	
}


export default Parallax;
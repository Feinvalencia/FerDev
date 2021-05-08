import React, {Component} from "react";
import {TweenMax} from "gsap/TweenMax";

import Window from '../Window';

import imgP1 from "../../assets/goals.jpg";
import imgP2 from "../../assets/about.jpg";
import imgP3 from "../../assets/data.png";
import imgP4 from "../../assets/play.png";




class Parallax3 extends Component {
  
  constructor(props) {
    super(props)
      this.state  = {
      parallaxState: false,
    }

    this.animateParallax = this.animateParallax.bind(this);
    this.enableParallax = this.enableParallax.bind(this);
    this.disableParallax = this.disableParallax.bind(this);
  }

  componentDidMount(){
    // GeneralAnimations.prepareGeneralAnimations();
    // setTimeout(GeneralAnimations.animateGeneralElements, 1000);
  }

  enableParallax(){
    this.setState({parallaxState: true})
  }
  disableParallax(){
    this.setState({parallaxState: false})
  }

  animateParallax(event){
    if(window.innerWidth > 760){
      let elems = event.currentTarget.querySelectorAll('.image-parallax');
      let dataParallax;
      let moveX = 0;
      let moveY = 0;
      
      for (var i = 0; i < elems.length; i++){
        let elem = elems[i]
        dataParallax = parseFloat(elem.getAttribute('data-parallax'))
        moveX = (event.screenX-700)*dataParallax;
        moveY = (event.screenY-500)*dataParallax;
        TweenMax.to(elem, 0.1,{x: moveX, y: moveY});
      }
    }
  }



  render(){
    return(
      <div className="module module-parallax medium-width" onMouseMove={this.animateParallax}>
        <div className="parallax-container">
          <div className="parallax-content image-parallax parallax-1" data-parallax="0.01"> {/*Img que esta al fondo*/}
            <Window dataClass="window-box " type="image" content={imgP1}/>
          </div>
          <div className="parallax-content image-parallax parallax-2" data-parallax="0.02">
            <Window dataClass="window-box " type="image" content={imgP2}/>
          </div>
          <div className="parallax-content image-parallax parallax-3" data-parallax="0.04">
            <Window dataClass="window-box " type="image" content={imgP3}/>
          </div>
          <div className="parallax-content image-parallax parallax-4" data-parallax="0.06">
            <Window dataClass="window-box " content="Let's work"/>
          </div>
          <div className="parallax-content image-parallax parallax-5" data-parallax="0.08">{/*Img en primer plano*/}
            <Window dataClass="window-box " type="image" content={imgP4} />
          </div>
        </div>
      </div>
    );
  }
}


export default Parallax3;
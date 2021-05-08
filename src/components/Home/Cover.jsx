import React, {Component} from "react";

import play from '../../assets/play.svg';
// import imgP1 from "../../assets/parallax_obj/1.png";
// import imgP1 from "../../assets/parallax_obj/1.png";
// import imgP1 from "../../assets/parallax_obj/1.png";

// import GeneralAnimations from '../../utils/generalAnimations';
import {TweenLite, Power0} from "gsap/TweenMax";


class Cover extends Component {
  
  constructor(props) {
    super(props);
    // this.gradient = React.createRef();
    // this.handleScroll = this.handleScroll.bind(this);
    // this.lastPercent = null;

    this.playSVG = <svg className="logo-play custom-cursor" onClick={this.props.showPopUp} width="84px" height="84px" viewBox="0 0 84 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <g transform="translate(-678.000000, -342.000000)">
            <g transform="translate(680.000000, 344.000000)">
              <circle stroke="#000000" strokeWidth="2.6" cx={40} cy={40} r={40} />
              <polygon fill="#000000" transform="translate(42.400000, 40.000000) rotate(-270.000000) translate(-42.400000, -40.000000) " points="42.4 29.6 52.8 50.4 32 50.4" />
            </g>
          </g>
        </g>
      </svg>
  }

  componentDidMount(){
    // if(this.gradient.current){
    //   window.addEventListener('scroll', this.handleScroll, false);
    // }
    // GeneralAnimations.prepareGeneralAnimations();
    // setTimeout(GeneralAnimations.animateGeneralElements, 1000);
  }

  componentWillUnmount() {
      // window.removeEventListener('scroll', this.handleScroll, false);  
  }

  // handleScroll(){
  //   let percentScroll = Math.min(window.scrollY/window.innerHeight, 1);
  //   if(percentScroll != this.lastPercent){
  //     this.lastPercent = percentScroll;
  //     TweenLite.to(this.gradient.current, 0.4, {opacity: percentScroll, ease: Power0.easeNone})
  //   }
  // }


  render(){
    return(
      <div className="module module-cover js-animate" data-animation-type="cover-animation" data-animation-delay="0.2">
{/*        <img src={imgP1} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="up"/>
        <img src={imgP1} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="up"/>
        <img src={imgP1} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="up"/>*/}

        <p className="title font-h1 font-center small-width" dangerouslySetInnerHTML={{__html: this.props.title}}></p>
        { (this.props.subtitle) ? (
            <p className="subtitle font-h4 font-center small-width">{this.props.subtitle}</p>
          ):""
        }
        { (this.props.video) ? (
            <React.Fragment>
            {this.playSVG}
            <div className="video-wrapper small-width">
              {(window.innerWidth > 760)?(
                <video ref="video" autoPlay muted loop playsInline src={this.props.video} className="media-video"></video>
                ):(
                <img src={this.props.image} alt="binary-blocks" className="media-img"/>
              )}
              {/*<img src={play} alt="binary-blocks" className="logo-play custom-cursor" onClick={this.props.showPopUp}/>*/}
            </div>
            </React.Fragment>
          ) : (
            <img src={this.props.image} alt="binary-blocks" className="media-img"/>
        )}
        {/*(this.props.gradient)?(
          <div className="gradient" ref={this.gradient}></div>
        ):null*/}
      </div>
    );
  }
}


export default Cover;
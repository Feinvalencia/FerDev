import React, {Component} from "react";
import {TweenMax, Power0} from "gsap/TweenMax";

// import GeneralAnimations from '../../utils/generalAnimations';

class LogoCarousel extends Component {
  
  constructor(props) {
    super(props)
    
    this.carouselRef= React.createRef();

    this.loaded = 0;
    this.loadImage = this.loadImage.bind(this);
    this.initTween = this.initTween.bind(this);
  }

  componentDidMount(){
    // GeneralAnimations.prepareGeneralAnimations();
    // setTimeout(GeneralAnimations.animateGeneralElements, 1000);
    window.addEventListener('resize', this.initTween);
    this.initTween();
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.initTween);
    if(this.tween){
      this.tween.kill();
    }
  }

  loadImage(){
    this.loaded++;
    this.initTween();
  }

  initTween(){
    if(this.props.logos === undefined || this.loaded === this.props.logos.length){
      let container = this.carouselRef.current.querySelector('.module-carousel-logos .img-container');
      let content = container.querySelectorAll('.img-content');
      if(!this.tween){
        this.tween = TweenMax.to(container, 30, {x: "-50%", repeat: -1, ease: Power0.easeNone, paused:true})
      }
      if(content[0].offsetWidth < window.innerWidth-200){
        content[1].classList.add('no-move');
        container.style = '';
        this.tween.pause();
      }else{
        content[1].classList.remove('no-move');
        if(this.tween.paused()){
          this.tween.play(0);
        }
      }
    }
  }

  drawContent( loadCallback = ()=>{} ){
    if(this.props.logos === undefined){
      return <div className="title font-big">&nbsp; {this.props.textLoop}</div>;
    }else{
      return this.props.logos.map((logo, index) => {
        let image = logo.image || logo;
        if(!image.originalname){
          image.originalname = 'logo';
        }

        image = <img className="img" src={image.url} alt={image.originalname} key={index} onLoad={loadCallback}/>;
        if(logo.link && logo.link.length > 0){
          return <a href={logo.link} target="_blank" rel="noopener noreferrer" key={"link-"+index} >{image}</a>
        }else{
          return image;
        }
      })
    }
  }
  
  render(){
    return(
      <div className="module module-carousel-logos" ref={this.carouselRef}>
        {(this.props.text)?(
          <div className="module-content">
            <p className="title font-border font-white font-h1 font-center small-width js-animate" data-animation-type="split-line-text" dangerouslySetInnerHTML={this.props.text.title}></p>
            <p className="subtitle extra-small-width font-h4 font-center js-animate" >{this.props.text.description}</p>
          </div>
          ): null
        }
        <div className="img-container-wrapper">
          <div className="img-container">
            <div className="img-content">
              {this.drawContent(this.loadImage)}
            </div>
            <div className="img-content">
              {this.drawContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default LogoCarousel;
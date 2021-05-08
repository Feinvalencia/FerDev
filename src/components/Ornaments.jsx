import React, {Component} from "react";


import imgP1 from "../assets/parallax_obj/1.png";
import imgP2 from "../assets/parallax_obj/2.png";
import imgP3 from "../assets/parallax_obj/3.png";
import imgP4 from "../assets/parallax_obj/4.png";
import imgP5 from "../assets/parallax_obj/5.png";
import imgP6 from "../assets/parallax_obj/6.png";
import imgP7 from "../assets/parallax_obj/7.png";
import imgP8 from "../assets/parallax_obj/8.png";
import imgP9 from "../assets/parallax_obj/9.png";




class Ornaments extends Component {
  
  constructor(props) {
    super(props)

    this.random = this.random.bind(this);
    this.imgList = [
      imgP1,
      imgP2,
      imgP3,
      imgP4,
      imgP5,
      imgP6,
      imgP7,
      imgP8,
      imgP9,
    ]
  }

  componentDidMount(){
    // GeneralAnimations.prepareGeneralAnimations();
    // setTimeout(GeneralAnimations.animateGeneralElements, 1000);

  }
  random(){
    let max = 9;
    let rand = Math.floor(Math.random() * max);
    return this.imgList[rand];
  }

  render(){
    return(
      <div className="module-ornaments js-animate" data-animation-delay="1.5" data-animation-type="ornaments">
        {(this.props.all)?(
            <div className="ornaments-container">
              <div className="parallax-content-parent item item-p4">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p5">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.3" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p3">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p6">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.3" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p1">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p2">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p7">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.3" data-parallax-direction="up"/>
              </div>
              {/*<div className="parallax-content-parent item item-p9">
                <img src={imgP9} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="up"/>
              </div>*/}
              <div className="parallax-content-parent item item-p10">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p11">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.3" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p12">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p13">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p14">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="up"/>
              </div>
            </div>
          ):null
        }
        {(this.props.technology)?(
            <div className="ornaments-container">
              <div className="parallax-content-parent item item-p4">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p5">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p3">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.4" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p1">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p6">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.3" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p7">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p2">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.22" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p8">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p7 second">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.3" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p9">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.3" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p11">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.21" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p10">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p12">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p13">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p14">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p15">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.3" data-parallax-direction="up"/>
              </div>
              <div className="parallax-content-parent item item-p16">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p17">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="down"/>
              </div>

              <div className="parallax-content-parent item item-p18">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.1" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p19">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.2" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p20">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.12" data-parallax-direction="down"/>
              </div>
              <div className="parallax-content-parent item item-p21">
                <img src={this.random()} alt="" className="parallax-content" data-pratio="0.12" data-parallax-direction="up"/>
              </div>

            </div>
          ):null
        }
      </div>
    );
  }
}


export default Ornaments;
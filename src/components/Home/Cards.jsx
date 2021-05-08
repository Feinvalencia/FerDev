import React, {Component} from "react";
import Window from '../Window';

class Cards extends Component {
  
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="module module-cards small-width">
          <div className="cards-container">
            <div className="arrow">
              {/*<img src="../assets/svg/up.svg" alt="" className="media-img"/>*/}
            </div>
            {this.props.cards.map((item,i)=>(
              <div className="card-item-container js-animate" key={i} >
                <div className={"card-item js-animate card-item-"+i} data-animation-type="bottom-opacity">
                  {/*<Window dataClass="window-box js-animate" textWrap="nowrap font-h3 font-title font-initial" type="text" content={item.windowTitle} extra={{"data-animation-type": "bottom-opacity"}}/>*/}
                  <img className="card-image" src={item.img} alt=""/>
                </div>
                <div className="text-container js-animate medium-width" data-animation-type="top-opacity">
                  <p className="title font-p">{item.title}</p>
                  <p className="text-container-description font-h5" dangerouslySetInnerHTML={{__html: item.text}}></p>
                </div>
              </div>
            ))}

          </div>
        </div>
    );
  }
}


export default Cards;
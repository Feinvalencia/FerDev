import React, {Component} from "react";

import MyLink from '../utils/navigation';

// import GeneralAnimations from '../../utils/generalAnimations';


class Text extends Component {
  
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    // GeneralAnimations.prepareGeneralAnimations();
    // setTimeout(GeneralAnimations.animateGeneralElements, 1000);
  }


  render(){
    let extraClass= (this.props.extraClass) ?this.props.extraClass:"";
    return(
      <div className={"module module-text "+extraClass}>
      {(this.props.title)?(
          <p className={"text js-animate " + this.props.title.class} data-animation-delay="0" data-animation-type="split-line-text">{this.props.title.text}</p>
        ):null}
      {(this.props.description)?(
          <p className={"text js-animate " + this.props.description.class} data-animation-type="opacity">{this.props.description.text}</p>
        ):null}
      {(this.props.link)?(
          <MyLink to={this.props.link.route} className={"link js-animate custom-cursor " + this.props.link.class}  data-cursor="magnet-link" data-animation-type="opacity">{this.props.link.text}</MyLink>
        ):null
      }
      {(this.props.externalLink)?(
          <a href={this.props.externalLink.route} target="__blank" rel="noopener noreferrer" className={"link js-animate custom-cursor " + this.props.externalLink.class}  data-cursor="magnet-link" data-animation-type="opacity">{this.props.externalLink.text}</a>
        ):null
      }
      </div>
    );
  }
}


export default Text;
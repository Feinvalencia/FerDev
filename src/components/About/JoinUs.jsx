import React, {Component} from "react";
// import MyLink from '../../utils/navigation';

import next from '../../assets/next.png';
import semi from '../../assets/semi.png';

// import GeneralAnimations from '../../utils/generalAnimations';

class JoinUs extends Component {
	
	constructor(props){
		super(props)
	}

	componentDidMount(){
		//GeneralAnimations.prepareGeneralAnimations();
		//setTimeout(GeneralAnimations.animateGeneralElements, 1000);
	}


	render(){
		return(
			<div className="module module-join-us font-center medium-width">
				<p className="title font-h2 font-left js-a nimate" data-animation-type="split-line-text" dangerouslySetInnerHTML={this.props.title}></p>
				<div className="content-container">
					<div className="text-container js-a nimate">
						<p className="text font-p ">{this.props.description}</p>
						{this.props.careers.map((career, i)=>(
							<a className="link font-link font-underline custom-cursor" href={career.link} target="_blank" rel="noopener noreferrer" key={i}>{career.text}</a>
						))}
					</div>
					<div className="media-container js-animate" data-animation-type="left-opacity" data-animation-delay="0.5">
						<img src={semi} alt="" className="media-bg"/>
						<img src={next} alt="" className="media-img"/>
					</div>
				</div>
			</div>
		);
	}
}


export default JoinUs;
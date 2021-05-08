import React, {Component} from "react";
import Window from  "../Window";

// import GeneralAnimations from '../../utils/generalAnimations';

class TitleWindowDescription extends Component {
	
	constructor(props){
		super(props)
	}

	componentDidMount(){
		//GeneralAnimations.prepareGeneralAnimations();
		//setTimeout(GeneralAnimations.animateGeneralElements, 1000);
	}


	render(){
		return(
			<div className="title-window-description-container">
				<div className="twd-wrapper">
					<div className="twd-content">
						<p className="twd-title font-h4 font-uppercase font-title-bold">{this.props.title}</p>
						<div className="shadow"></div>
						<div className="img-container">
							<img className="media-img" src={this.props.mediaSrc} alt={this.props.mediaSrc}/>
							{/*<div className="curtain"></div>*/}
							{/*<p className="twd-description font-p font-white">{this.props.description}</p>*/}
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}


export default TitleWindowDescription;
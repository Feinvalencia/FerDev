import React, {Component} from "react";
import MyLink from '../utils/navigation';


// import GeneralAnimations from '../../utils/generalAnimations';

class NextSection extends Component {
	
	constructor(props){
		super(props)
	}

	componentDidMount(){
		//GeneralAnimations.prepareGeneralAnimations();
		//setTimeout(GeneralAnimations.animateGeneralElements, 1000);
	}


	render(){
		return(
			<div className="module module-next-section font-center medium-width">
			    <MyLink to={this.props.link} className="font-big font-underline">{this.props.text}</MyLink>
			</div>
		);
	}
}


export default NextSection;
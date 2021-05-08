import React, {Component} from "react";

// import GeneralAnimations from '../../utils/generalAnimations';

class Image extends Component {
	
	constructor(props) {
		super(props)
	}

	componentDidMount(){
		 
	}

	render(){
		return(

			<div className="module module-image">
				<img src={this.props.img} alt="" className="media-img"/>
			</div>
		);
	}
}


export default Image;
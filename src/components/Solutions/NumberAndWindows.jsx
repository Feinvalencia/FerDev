import React, {Component} from "react";
import Window from '../Window';

class NumberAndWindows extends Component {
	
	constructor(props) {
		super(props)
	}

	componentDidMount(){

	}


	render(){
		return(
			<div className={"module  module-window js-animate "+this.props.data.aligment+" "+this.props.data.class} data-animation-type="number-window">
				<div className="small-width">
					<div className="content-container">
						<div className="media-container">
							<Window dataClass="window-box" type={this.props.data.mediaType} content={this.props.data.mediaSrc} />
						</div>
						<div className="text-container">
							<p className="number font-h1 font-title-bold">{this.props.data.number}</p>
							<p className="title font-h3">{this.props.data.title}</p>
							<p className="text font-p">{this.props.data.description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default NumberAndWindows;
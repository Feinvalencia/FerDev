import React, {Component} from "react";
import Window from '../Window';
import MyLink from '../utils/navigation';

class TextAndWindows extends Component {
	
	constructor(props) {
		super(props)
	}

	componentDidMount(){

	}


	render(){
		let style = {};
		if(this.props.data.ratio !== undefined){
			style = {
				'--ratio': this.props.data.ratio,
			}
		}
		return(
			<div className={"module module-window "+this.props.data.aligment+" "+this.props.data.class} style={style}>
				<div className="small-width">
					<div className="content-container">
						<div className="media-container">
							<Window dataClass="window-box" type={this.props.data.mediaType} content={this.props.data.mediaSrc} />
							<Window dataClass="window-box window-box-top js-animate"  textWrap="nowrap" type="text" content={this.props.data.title} extra={{"data-animation-type": "expand"}}/>
						</div>
						<div className="text-container js-animate" data-animation-type="left-opacity" data-animation-delay="0.1">
							<p className="text font-p">{this.props.data.description}</p>
							<MyLink to={this.props.data.link} className="link font-link font-underline custom-cursor" data-cursor="magnet-link">{this.props.data.linkText}</MyLink>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default TextAndWindows;
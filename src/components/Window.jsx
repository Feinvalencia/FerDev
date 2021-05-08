import React, {Component} from "react";

class Window extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	componentDidMount(){
	}


	render(){
		let windowContent = null;
		if(this.props.type === "video"){
			let styleRatio = {}
			if(this.props.ratio){
				styleRatio = {
					"--ratio" : this.props.ratio,
				}
			}
			windowContent = <video ref="video" style={styleRatio} muted loop playsInline src={this.props.content} className="media-video js-animate" data-animation-type="video-play" preload="none"/>

		}else if(this.props.type === "image"){
			windowContent = <img src={this.props.content} alt="" className="media-img"/>
		}else{
			windowContent = <p className={"text font-h4t font-center font-uppercase "+this.props.textWrap}>{this.props.content}</p>
		}


		return(
			
				<div className={"window-box "+this.props.dataClass} {...this.props.extra}>
					<div className="window-header">
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
					<div className="window-body">
						{windowContent}
					</div>
				</div>						

						

/*
			<div className="window-container js-fluid custom-cursor" data-cursor="magnet-link">
				<div className="window-header">
					<div className="header-buttons-container">
						<div className="header-button"></div>
						<div className="header-button"></div>
						<div className="header-button"></div>
					</div>
				</div>
				<div className="window-body">
					<img className="image lazyload" src="./assets/img/12.jpg" alt=""/>
					<div className="image lazy-container lazy">
		                <div className="get_lazy_gradient_class"></div>
		            </div>
				</div>
			</div>
*/
		);
	}
}


export default Window;
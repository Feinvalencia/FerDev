import React, {Component} from "react";
import Window from '../Window';

import arrow from '../../assets/arrow.svg';
import logoSmall from '../../assets/logo_small.svg';

// import GeneralAnimations from '../../utils/generalAnimations';

class Aproach extends Component {
	
	constructor(props) {
		super(props)
	}
	

	componentDidMount(){
		 
	}

	render(){
		return(
			<div className="module module-aproach js-animate" data-animation-type="top-opacity">
				<div className="small-width">
					<div className="aproach-content">
						<div className="circle-container">
							<SvgCircle className="offset"/>
							<SvgCircle className="dash" strokeWidth="0.5"/>
						</div>
						<div className="circle-container">
							<SvgCircle className="offset"/>
							<SvgCircle className="dash" strokeWidth="0.5"/>
						</div>
						<div className="circle-text-container">
							<div className="circle-text-item">
								<p className="font-h3">{this.props.data[0].title}</p>
								<p className="font-h4 font-center" dangerouslySetInnerHTML={{__html:this.props.data[0].text}}></p>
							</div>
							<div className="circle-text-item font-center">
								<p className="font-h3 only-desktop">{this.props.data[1].title}</p>
								<p className="font-h4 font-center only-desktop" dangerouslySetInnerHTML={{__html:this.props.data[1].text}}></p>
								<svg className="logo only-mobile" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100px" height="39px" viewBox="0 0 100 39" version="1.1">
							    	<g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
										<g fill="#000000">
										<circle cx="19.2" cy="19.2" r="19.2" />
										<rect x={45} y={0} width="9.3" height="38.4" />
										<rect x="60.9" y={0} width="38.4" height="38.4" />
										</g>
									</g>
								</svg>
							</div>
							<div className="circle-text-item">
								<p className="font-h3">{this.props.data[2].title}</p>
								<p className="font-h4 font-center" dangerouslySetInnerHTML={{__html:this.props.data[2].text}}></p>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}


export default Aproach;


const SvgCircle = (props) => (
	<svg {...props} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<circle cx="50%" cy="50%" r="49%" fill="transparent" stroke="black" />
	</svg>
)
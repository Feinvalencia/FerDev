import React, {Component} from "react";

// import imgP1 from "../assets/parallax_obj/1.png";
class SpecialText extends Component {
	
	constructor(props){
		super(props);


	}

	componentDidMount(){
	}


	render(){
		let textWithSvg = null;
		let animation = 'special-text';
		if(this.props.svgText){
			let split = this.props.text.split(this.props.svgText)
			if(split.length > 1){
				textWithSvg = <div className="font-h1b text-with-sign">
					<div className="font-h1b font-white font-border js -animate" data-animation-type="split-line-text">{split[0]}
					<LetterSvg svg={this.props.svg} text={this.props.svgText}/>
					{split[1]}</div>
				</div>
			}else{
				textWithSvg = <div className="font-h1b text-with-sign">
					<p className="font-h1b font-white font-border js -animate" data-animation-type="split-line-text">{this.props.text}</p>
					<LetterSvg svg={this.props.svg} text={this.props.svgText}/>
				</div>
			}
		}else{
			animation = 'split-line-text';
			textWithSvg = <div className="font-h1b text-with-sign">
				<p className="font-h1b font-white font-border js -animate" data-animation-type="split-line-text">{this.props.text}</p>
			</div>
		}
		return(
			<div className="module module-special-text small-width parallax-content-parent js-animate" data-animation-type={animation}>
				<div className="text-title">
					{textWithSvg}
					<div className="font-sign js-bounce-on"></div>
				</div>
				<div className="text-description">
					<p className="font-p">{this.props.description}</p>
				</div>
			</div>
		);
	}
}



export default SpecialText;

class LetterSvg extends Component{
	// constructor(){
		// this.animateLetter = this.animateLetter.bind(this);
	// }

	// animateLetter(){

	// }

	render() {
		return (
			<span className="letter-svg-container" style={{marginLeft: "0.4em"}}>
				<p className="letter-svg-text">{this.props.text}</p>
				{this.props.svg}
			</span>
		)
	}
};

import React, {Component} from "react";
import Window from '../Window';

import arrow from '../../assets/arrow.svg';

// import GeneralAnimations from '../../utils/generalAnimations';

class TextList extends Component {
	
	constructor(props) {
		super(props);
		this.containerRef = React.createRef();
		this.changeHover = this.changeHover.bind(this);
	}

	componentDidMount(){
		 
	}

	changeHover(hover){
		if(hover){
			this.containerRef.current.classList.add('hover');
		}else{
			this.containerRef.current.classList.remove('hover');
		}
	}

	render(){
		return(

			<div className="module module-prices medium-width" ref={this.containerRef}>
				<div className="price-container">
					{(this.props.dataList.map((value, index) => {
						let imgSrc = value.img[Object.keys(value.img)[0]]
						return(
							<p className="price-text font-h1 js-animate custom-cursor" data-animation-type="top-opacity" data-cursor-type="cursor-image" data-image-src={imgSrc} key={index} onMouseEnter={()=>{this.changeHover(true)}} onMouseLeave={()=>{this.changeHover(false)}}>{value.text}</p>
						)}
					))}
				</div>
			</div>
		);
	}
}


export default TextList;
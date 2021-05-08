import React, {Component} from "react";


class ArrowTitle extends Component {
	
	constructor(props){
		super(props);
		

	}

	componentDidMount(){
	}


	render(){
		
		return(
			<div className={"module arrow-title-container medium-width no-margin js-animate " + this.props.extraClass} data-animation-type="right-opacity">
				<SvgArrow className="arrow" fill={(this.props.color)? this.props.color : "black" } />
				<p className="arrow-title font-h4">{(this.props.title)? this.props.title : null }</p>
			</div>
		);
	}
}



export default ArrowTitle;



const SvgArrow = (props) => (
	<svg {...props} width="51px" height="54px" viewBox="0 0 51 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <g transform="translate(51.000000, 0.000000)" fillRule="nonzero"> <g transform="rotate(-270.000000)"> <path d="M6.40237797,51.5 L0.5,45.9574468 L40.1946183,8.39361702 L9.781602,8.39361702 L9.781602,0.5 L54.5,0.5 L54.5,42.6702128 L46.1420526,42.6702128 L46.1420526,13.9468085 L6.40237797,51.5 Z M2.08823529,45.9574468 L6.40237797,50 L47.2684606,11.4148936 L47.2684606,41.606383 L53.373592,41.606383 L53.373592,1.56382979 L10.9643304,1.56382979 L10.9643304,7.32978723 L42.9430538,7.32978723 L2.08823529,45.9574468 Z" /> </g> </g></svg>
)

import React, {Component} from "react";

import Cover from '../../components/Home/Cover';
import SEO from '../../components/SEO';

import GeneralAnimations from '../utils/generalAnimations';


import coverImg from '../../assets/404.png'

class page404 extends Component {
	
	constructor(props){
		super(props)
		this.state  = {
			
		}
	}
	
	componentDidMount(){
		window.scrollTo(0,0);
		GeneralAnimations.prepareGeneralAnimations();
		GeneralAnimations.iniObserver();
	}

	componentWillUnmount() {
		
	}

	componentDidUpdate(){
		GeneralAnimations.iniObserver();
	}


	render(){
		return(
			<section className="page page-404">
				<SEO data={this.props.data.seo} routeParams={{currentPath:"404", pathEN:"404", pathES:"404"}}/>
				<Cover title={this.props.data.title} image={coverImg} />
			</section>
		);
	}
}


export default page404;
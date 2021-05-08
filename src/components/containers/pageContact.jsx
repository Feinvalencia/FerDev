import React, {Component} from "react";
import SEO from '../../components/SEO';

import GeneralAnimations from '../utils/generalAnimations';

import ContactForm from '../../components/Contact/ContactForm';
import TourForm from '../../components/Contact/TourForm';



class pageContact extends Component {
	
	constructor(props){
		super(props)
		this.state  = {
			
		}
	}
	
	componentDidMount(){
		window.scrollTo(0,0);
		GeneralAnimations.prepareGeneralAnimations();
    	// setTimeout(GeneralAnimations.animateGeneralElements, 1000);
		GeneralAnimations.iniObserver();
		// new CustomScroll();
		this.props.functions.hideFooter();
	}

	componentWillUnmount() {
		this.props.functions.showFooter();
	}

	componentDidUpdate(){
		GeneralAnimations.iniObserver();
	}


	render(){
		return(
			<section className="page page-contact">
				<SEO data={this.props.data.seo} routeParams={this.props.routeParams}/>
					
				{/*<Ornaments all={true}/>*/}
				{(this.props.tour) ?
					<TourForm title={this.props.data.title} thanksLink={this.props.data.thanksLink}/>
					:
					<ContactForm title={this.props.data.title} thanksLink={this.props.data.thanksLink}/>
				}

			</section>
		);
	}
}


export default pageContact;

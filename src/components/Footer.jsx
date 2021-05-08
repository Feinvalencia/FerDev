import React, {Component} from "react";
import GeneralAnimations from './utils/generalAnimations';



import MyLink from './utils/navigation';


class Footer extends Component {
	
	constructor(props){
		super(props)
		this.state  = {
			// page: false,
			style: {}
		}
		this.logoSmallBlack =  <svg className="logo" fill="#000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100px" height="39px" viewBox="0 0 100 39" version="1.1">
						        <g stroke="none" strokeWidth={1} fillRule="evenodd">
						          <g>
						            <circle  cx="19.2" cy="19.2" r="19.2" />
						            <rect  x={45} y={0} width="9.3" height="38.4" />
						            <rect  x="60.9" y={0} width="38.4" height="38.4" />
						          </g>
						        </g>
						      </svg>

		this.hideFooter = this.hideFooter.bind(this);
		this.showFooter = this.showFooter.bind(this);
	}

	hideFooter(){
		this.setState({style: {display: 'none'}});
	}

	showFooter(){
		this.setState({style: {}});
	}
	
	componentDidMount(){
		GeneralAnimations.prepareGeneralAnimations();
	}

	render(){
		// Codificación a json para hacer una copia del objeto
		let menu = JSON.parse(JSON.stringify(this.props.dataMenu));
		if(this.props.dataFooter.Menu){
			for(let key in this.props.dataFooter.Menu){
				menu[key].text = this.props.dataFooter.Menu[key].text;
			}
		}
		return(
	        <footer className="module-footer" style={this.state.style}>
	        <div className="module medium-width">
				<div className="footer-content left">
					{/*<img src={logoBB} alt="" className="logo"/>*/}
					{this.logoSmallBlack}
					<p className="text font-p2 ">{this.props.dataFooter.text}</p>
					<div className="page-sections">
					  <MyLink to={menu.home.link} className="item font-p ">{menu.home.text}</MyLink>
					  <MyLink to={menu.technology.link} className="item font-p ">{menu.technology.text}</MyLink>
					  <MyLink to={menu.solutions.link} className="item  font-p ">{menu.solutions.text}</MyLink>
					  <MyLink to={menu.about.link} className="item font-p ">{menu.about.text}</MyLink>
					  <MyLink to={menu.contact.link} className="item font-p ">{menu.contact.text}</MyLink>
					  
					</div>
					<div className="social-media">
					  <div className="social-media-link">
						  <a href="https://www.instagram.com/binaryblocks/" target="_blank" rel="noopener noreferrer" className="font-p ">Instagram</a>
						  <a href="https://www.facebook.com/binaryblocks/" target="_blank" rel="noopener noreferrer" className="font-p ">Facebook</a>
						  <a href="https://www.linkedin.com/company/binaryblocksio/" target="_blank" rel="noopener noreferrer" className="font-p ">Linkedin</a>
					  </div>
					</div>
				</div>
				<div className="footer-content right">
					<div className="contact-info">
					  <a href="tel:+16467414699" className="font-p ">(COL) +57 301 653 8494</a>
					  <a href="tel:+34958081759" className="font-p ">(COL) +57 301 653 8494</a>
					  <a href="mailto:hello@binaryblocks.io" className="font-p ">Feinervalencia@reactsys.com</a>
					</div>
					<div className="subscribe">
					  {/*<Form/>*/}
					  <p className="title font-p ">{this.props.dataFooter.subscribeLink.title}</p>
					  <p className="text font-p2 ">{this.props.dataFooter.subscribeLink.text}</p>
					  {/*<a href={this.props.dataFooter.subscribeLink.link} className="font-p2 font-underline">{this.props.dataFooter.subscribeLink.linkText}</a>*/}
					  <MyLink to={this.props.dataFooter.subscribeLink.link} className="font-p2 font-underline">{this.props.dataFooter.subscribeLink.linkText}</MyLink>
					  {/*<div className="input-type">
					      <input className="input font-p  custom-cursor" placeholder="Email" name="email" type="email" required/>
					      	<p className="invalid-text font-p2 font-gray">Something went wrong. Please try again.</p>
					  </div>*/}
					</div>
				</div>
				<p className="text-bottom font-p2 ">© {(new Date()).getFullYear()} Reactsys.com</p>
				</div>
	        </footer>
		);
	}
}


export default Footer;

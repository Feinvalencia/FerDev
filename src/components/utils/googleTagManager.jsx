import TagManager from 'react-gtm-module'

const GoogleTagManager = {
	
	gtmId: 'GTM-5P9KJTW',
	
	initialize: ()=>{
		TagManager.initialize({
			gtmId: GoogleTagManager.gtmId,
		});
	},
	
	pageview: ()=>{
		TagManager.dataLayer({events: {pageview: true}});
	},
}

export default GoogleTagManager;
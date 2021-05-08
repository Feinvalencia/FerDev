function searchToObject() {
	let pairs = window.location.search.substring(1).split("&");
	let obj = {};

	for (let i in pairs ) {
		if ( pairs[i] === "" ) continue;

		let pair = pairs[i].split("=");
		obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
	}

	return obj;
}

function users_crm_query(action, email, params = {}){
	const data = {
		email: email,
		params: params,
		urlParams: searchToObject(),
	}
	return fetch(`/${action}`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	}).then(res => {return res.json();}).then(result => { console.log(result)}).catch(error => {console.log(error)});
}

const HubSpot = {
	addSubcriber: function(email){
		return users_crm_query('send-newsletter', email);
	},
	sendContact: function(data, callback){
		return users_crm_query('send-contact', data.email, data);
	},
	sendTour: function(data, callback){
		return users_crm_query('send-tour', data.email, data);
	},
}

export default HubSpot;
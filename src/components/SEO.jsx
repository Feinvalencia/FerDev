import React from "react";
import {Helmet} from "react-helmet";
import defaultImage from "../assets/thumb.jpg";

export default (props) => {
	let image = (props.data.image) ? props.data.image : defaultImage;
	return (
		<Helmet>
			<title>{props.data.title}</title>
			<meta name="description" content={props.data.description} />
			<link rel="canonical" href={window.bb_baseURL+props.routeParams.currentPath} />
			<link rel="alternate" hreflang="en" href={window.bb_baseURL+props.routeParams.pathEN} />
			<link rel="alternate" hreflang="es" href={window.bb_baseURL+props.routeParams.pathES} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={props.data.title} />
			<meta property="og:url" content={window.bb_baseURL+props.routeParams.currentPath} />
			<meta property="og:image" content={image} />
			<meta property="og:description" content={props.data.description} />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={props.data.title} />
			<meta name="twitter:description" content={props.data.description} />
			<meta name="twitter:image" content={image} />
		</Helmet>
	);
};
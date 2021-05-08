import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch} from "react-router-dom";
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// import { hydrate, render } from "react-dom";

// const rootElement = document.getElementById("root");
// let Component = <Router>
// 		<Switch>
// 			<Route path="/es/" component={(props)=>(<App {...props} lang="es"/>)} />
// 			<Route path="/" component={(props)=>(<App {...props} lang="en"/>)} />
// 		</Switch>
// 	</Router>


// if (rootElement.hasChildNodes()) {
//   hydrate(Component, rootElement);
// } else {
//   render(Component, rootElement);
// }

ReactDOM.render(
	<Router>
		<Switch>
			<Route path="/es/" component={(props)=>(<App {...props} lang="es"/>)} />
			<Route path="/" component={(props)=>(<App {...props} lang="en"/>)} />
		</Switch>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
serviceWorker.register();

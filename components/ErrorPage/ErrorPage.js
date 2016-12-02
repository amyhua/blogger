import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ErrorPage extends Component {
	render() {
		return (
			<div className="row">
			  <div className="span12">
			    <div className="hero-unit center">
			        <h1>Page Not Found <small>Error 404</small></h1>
			        <br />
			        <p>
			        	The page you requested could not be found, either contact your webmaster or try again. 
			        	Use your browsers <b>Back</b> button to navigate to the page you have prevously come from
			        </p>
			        <Link to="/" className="btn btn-large btn-info">
			        	Take Me Home
			        </Link>
			    </div>
			  </div>
			</div>
		);	
	}
}
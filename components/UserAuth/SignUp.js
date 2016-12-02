import React, { Component, PropTypes } from 'react';
import UserAuthForm from '../ConnectedComponents/UserAuthFormApp'

export default class PostForm extends Component {

	render() {
		return (
			<div>
				<UserAuthForm signUp={true}/>
			</div>
		);
	}
}
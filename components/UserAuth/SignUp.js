import React, { Component } from 'react';
import UserAuthFormApp from '../../containers/UserAuthFormApp';

export default class Signup extends Component {

	render() {
		return (
			<div>
				<UserAuthFormApp signUp={true} />
			</div>
		);
	}
};

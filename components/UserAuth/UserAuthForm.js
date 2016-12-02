import React, { Component, PropTypes } from 'react';

export default class PostForm extends Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(userAuthForm)  {
		this.props.onFormSubmit(this.props.signUp, userAuthForm);
	}

	render() {
		const header = this.props.signUp ? 'User Sign Up' : 'User Login'
		return (
			<div>
				<h1>{header}</h1>
				<div>
				  <label>Email</label>
				</div>
				<div>
				  <input
				  	value={this.props.userAuthForm.email}
				  	onChange={(e)=> this.props.onEmailChange(e.target.value)}
				    type="text"
				    name="email"/>
				</div>
				<div>
				  <label>Password</label>
				</div>
				<div>
				  <input
				  	value={this.props.userAuthForm.password}
				  	onChange={(e) => this.props.onPasswordChange(e.target.value)}
				    name="password"
				    type="password"/>
				</div>
				<input type="submit" value="Submit" onClick={() => this.handleSubmit(this.props.userAuthForm)}/>
			</div>
		);
	}
}

PostForm.propTypes = {
	userAuthForm: PropTypes.object,
	onEmailChange: PropTypes.func,
	onPasswordChange: PropTypes.func,
	onFormSubmit: PropTypes.func.isRequired
}
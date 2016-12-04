import React, { Component, PropTypes } from 'react';

export default class PostForm extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.onDidMount) {
			this.props.onDidMount(this.props.params.id);
		}
	}

	render() {
		return (
			<div>
				<h1>User Details</h1>
				<div>
				  <label>Email</label>
				</div>
				<span>{this.props.userDetails.email}</span>
			</div>
		);
	}
}

PostForm.propTypes = {
	userDetails: PropTypes.object,
	onDidMount: PropTypes.func
}
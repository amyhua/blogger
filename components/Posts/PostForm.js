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

	handleSubmit(postForm) {
		this.props.onFormSubmit(this.props.params.id, {
			title: postForm.title,
			body: postForm.body
		});
	}

	render() {
		return (
			<form onSubmit={() => this.handleSubmit(this.props.postForm)}>
				<div>
				  <label>Title</label>
				</div>
				<div>
				  <input
				  	value={this.props.postForm.title}
				  	onChange={(e)=> this.props.onTitleChange(e.target.value)}
				    type="text"
				    name="title"/>
				</div>
				<div>
				  <label>Body</label>
				</div>
				<div>
				  <textarea
				  	value={this.props.postForm.body}
				  	onChange={(e) => this.props.onBodyChange(e.target.value)}
				    name="body"
				    cols="30" rows="10"></textarea>
				</div>
				<button type="submit" value="Submit" />
			</form>
		);
	}
};

PostForm.propTypes = {
	postForm: PropTypes.object,
	onTitleChange: PropTypes.func,
	onBodyChange: PropTypes.func,
	onFormSubmit: PropTypes.func.isRequired
};

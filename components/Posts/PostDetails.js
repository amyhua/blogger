import React, { Component } from 'react';
import { Link } from 'react-router';

import CommentBox from '../../containers/CommentBoxApp';
import CommentList from '../CommentList/CommentList';

export default class PostDetails extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.onDidMount) {
			this.props.onDidMount(this.props.params.id);
		}
	}

	render() {
		const post = this.props.postDetails || {}
		const postEditLink = '/posts/' + post.id + '/edit';
		const commentId = post.id + ' ';
		const tags = post.tags.map((tag, i) => {
			return <li key={i}> {tag.title}</li>
		});

		return (
			<div className="row">
				<div className="col-md-12">
				  <h1>{post.title}</h1>
				  <ul className="tags">
				  	{tags}
				  </ul>
				  <Link to={postEditLink} className="btn btn-s btn-default">Edit Post</Link>
				  <div>
				    {post.body}
				  </div>
				  <section id="react-comments">
					<CommentBox postId={commentId}/>
				  </section>
				  <section>
				    <h3>Comments</h3>
				    <CommentList id="comment" comments={post.comments} />
				  </section>
				</div>
			</div>
		);
	}
}
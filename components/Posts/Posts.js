import React, { Component } from 'react';
import { Link } from 'react-router';


import BlogPost from './BlogPost';

export default class Posts extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.onDidMount) {
			this.props.onDidMount();
		}
	}

	render() {
		const data = this.props.data.map((post, i) => {
			return <BlogPost {...post} key={i}/>
		})

		return (
			<div>
				<h1> My Blog Posts </h1>
				<Link to="/posts/new">Create a Post</Link><br/>
				<Link to="/sign-up">Sign Up</Link><br/>
				<Link to="/login">Login</Link>
				<table className="table">
				    <thead>
				      <tr>
				        <td>ID</td>
				        <td>Author</td>
				        <td>Tags1</td>
				        <td>Tags2</td>
				        <td>Title</td>
				        <td>Body</td>
				        <td>Date</td>
				      </tr>
				    </thead>
				    <tbody>
				    	{data}
				    </tbody>
				</table>
			</div>
		);
	}
}
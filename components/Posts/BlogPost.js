import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BlogPost extends Component {
	render() {
		const postLink = "/posts/" + this.props.id;
		const fullName = this.props.user.firstName + ' ' + this.props.user.lastName;
		const tags = [];
		let link;
		const tagLinks = this.props.tags.map(function(tag, i) {
			link = '/tags/' + tag.id;
			tags.push(tag.title);
			return <Link to={link} key={i}> {tag.title} </Link>; 
		})

		const tagsString = tags.join(', ');

		return (
			<tr>
			  <td>{this.props.id}</td>
			  <td>{fullName}</td>
			  <td>{tagsString}</td>
			  <td>{tagLinks}</td>
			  <td>
			    <a href={postLink}>{this.props.title}</a>
			  </td>
			  <td>{this.props.body}</td>
			  <td>{this.props.createdAt}</td>
			</tr>
		);
	}
}
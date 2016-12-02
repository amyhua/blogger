import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Posts from '../ConnectedComponents/PostsApp';
import PostForm from '../ConnectedComponents/PostFormApp';
import PostDetails from '../ConnectedComponents/PostDetailsApp'
import SignUp from '../UserAuth/SignUp'
import Login from '../UserAuth/Login'
import ProfileApp from '../ConnectedComponents/ProfileApp'
import ErrorPage from '../ErrorPage/ErrorPage'

export default class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/">
					<IndexRoute component={Posts} />
					<Route path="/sign-up" component={SignUp}/>
					<Route path="/login" component={Login}/>
					<Route path="/profile/:id" component={ProfileApp}/>
					<Route path="/posts/new" component={PostForm}/>
					<Route path="/posts/:id/edit" component={PostForm}/>
					<Route path="/posts/:id" component={PostDetails}/>
					<Route path="*" component={ErrorPage}/>
				</Route>
			</Router>
		);	
	}
}


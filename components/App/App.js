import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Posts from '../../containers/PostsApp';
import PostFormApp from '../../containers/PostFormApp';
import PostDetails from '../../containers/PostDetailsApp';
import SignUp from '../UserAuth/SignUp';
import LoginApp from '../../containers/LoginApp';
import ProfileApp from '../../containers/ProfileApp';
import ErrorPage from '../ErrorPage/ErrorPage';

export default class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/">
					<IndexRoute component={Posts} />
					<Route path="/sign-up" component={SignUp}/>
					<Route path="/login" component={LoginApp}/>
					<Route path="/profile/:id" component={ProfileApp}/>
					<Route path="/posts/new" component={PostFormApp}/>
					<Route path="/posts/:id/edit" component={PostFormApp}/>
					<Route path="/posts/:id" component={PostDetails}/>
					<Route path="*" component={ErrorPage}/>
				</Route>
			</Router>
		);	
	}
}


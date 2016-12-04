import { connect } from 'react-redux';
import {
  initiateHTTPRequest,
  processHTTPError,
  processPostDetailsRequestSuccess,
  onPostFormTitleChange,
  onPostFormBodyChange
} from '../actions';

import PostForm from '../components/Posts/PostForm';
import { browserHistory } from 'react-router';

import fetch from 'isomorphic-fetch';

const mapStateToProps = state => {
  return {
    postForm: state.userAuthForm || {},
  };
};

const mapDispatchToProps = dispatch => {
  return {

    onDidMount: (postId) => {
      if (postId) {
        dispatch(initiateHTTPRequest());
        fetch('/api/posts/' + postId)
        .then(response => response.json())
        .then((response) => dispatch(processPostDetailsRequestSuccess(response)))
        .catch((err) => dispatch(processHTTPError(err)));
      }
    },

    onTitleChange: (title) => {
      dispatch(onPostFormTitleChange(title));
    },

    onBodyChange: (body) => {
      dispatch(onPostFormBodyChange(body));
    },

    onFormSubmit: (postId, post) => {
      dispatch(initiateHTTPRequest());
      const url = postId ? '/api/posts/' + postId + '/edit' : '/api/posts/new'
      fetch(url, {
        method: 'POST',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post) 
      })
      .then(response => response.json())
      .then((response) => browserHistory.push('/'))
      .catch((err) => dispatch(processHTTPError(err)));
    }
  }
};

const PostFormApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);

export default PostFormApp;

import { connect } from 'react-redux';
import {
  initiateHTTPRequest,
  processHTTPError,
  processPostDetailsRequestSuccess,
  onCommentBoxFormChange,
} from '../actions';

import CommentBox from '../components/CommentBox/CommentBox';

import fetch from 'isomorphic-fetch';

const mapStateToProps = state => {
  return {
    commentForm: state.commentForm || {},
  };
};

const mapDispatchToProps = dispatch => {
  return {

    onFormChange: (text) => {
      dispatch(onCommentBoxFormChange(text))
    },

    onFormSubmit: (postId, text) => {
      dispatch(initiateHTTPRequest());
      fetch('/api/posts/' + postId + '/comments/new', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: text}) 
      })
      .then((response) => {
        return fetch('/api/posts/' + postId)
      })
      .then(response => response.json())
      .then((response) => {
        dispatch(onCommentBoxFormChange(''))
        dispatch(processPostDetailsRequestSuccess(response))
      })
      .catch((err) => dispatch(processHTTPError(err)));
    }
  }
};

const CommentBoxApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox);

export default CommentBoxApp;
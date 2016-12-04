import { connect } from 'react-redux';
import { initiateHTTPRequest, processPostListRequestSuccess, processHTTPError } from '../actions';
import Posts from '../components/Posts/Posts';

import fetch from 'isomorphic-fetch';


const mapStateToProps = state => {
  return {
    data: state.data || [],
    requestPending: state.requestPending || false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDidMount: () => {
      dispatch(initiateHTTPRequest());
      fetch('/api/posts')
        .then(response => response.json())
        .then((response) => dispatch(processPostListRequestSuccess(response)))
        .catch((err) => dispatch(processHTTPError(err)));
    }
  }
};

const PostsApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

export default PostsApp;
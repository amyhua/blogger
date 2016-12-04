import { connect } from 'react-redux';
import {
  initiateHTTPRequest,
  processHTTPError,
  processPostDetailsRequestSuccess
} from '../actions';
import PostDetails from '../components/Posts/PostDetails';

const mapStateToProps = state => {
  return {
    postDetails: state.postDetails,
    requestPending: state.requestPending
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
    }
  };
};

const PostDetailsApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);

export default PostDetailsApp;

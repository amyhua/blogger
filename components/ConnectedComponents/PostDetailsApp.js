import { connect } from 'react-redux';
import { initiateHTTPRequest, processHTTPError, processPostDetailsRequestSuccess } from '../../actions';
import PostDetails from '../Posts/PostDetails';

const mapStateToProps = (state, ownProps) => {
  return {
    postDetails: state.postDetails || {},
    requestPending: state.requestPending || false
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
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
  }
};

const PostDetailsApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);

export default PostDetailsApp;
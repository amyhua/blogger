import { connect } from 'react-redux';
import {
  initiateHTTPRequest,
  processUserDetailsRequestSuccess,
  processUserDetailsRequestFailure,
  processHTTPError
} from '../actions';
import Profile from '../components/UserProfile/Profile';
import fetch from 'isomorphic-fetch';
import auth from '../services/auth';
import { browserHistory } from 'react-router';



const mapStateToProps = state => {
  return {
    userDetails: state.userDetails,
    userError: state.userError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDidMount: (userId) => {
      dispatch(initiateHTTPRequest());
      fetch('/api/protected/profile/' + userId, {
        headers: {
          'Authorization': auth.getToken()
        }
      })
      .then(response => {
        if (response.error) {
          auth.logout();
          browserHistory.push('/login');
          dispatch(processUserDetailsRequestFailure(response.error));
          return;
        }
        return response.json()
          .then(json => {
            if (json.error) {
              auth.logout();
              dispatch(processUserDetailsRequestFailure(json.error.message));
              browserHistory.push('/login');
              return;
            }
            dispatch(processUserDetailsRequestSuccess(json));
          });
      })
      .catch((err) => {
        console.error(err);
        dispatch(processHTTPError(err));
      });
    }
  };
};

const ProfileApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileApp;
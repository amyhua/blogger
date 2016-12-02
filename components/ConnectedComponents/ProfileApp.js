import { connect } from 'react-redux';
import { initiateHTTPRequest, processUserDetailsRequestSuccess, processHTTPError } from '../../actions';
import Profile from '../UserProfile/Profile';

import fetch from 'isomorphic-fetch';

import { auth } from '../UserAuth/services/user-auth-service';
import { browserHistory } from 'react-router'



const mapStateToProps = (state, ownProps) => {
  return {
    userDetails: state.userDetails || {},
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDidMount: (userId) => {
      dispatch(initiateHTTPRequest());
      fetch('/api/protected/profile/' + userId, {
        headers: {
          authorization: auth.getToken()
        }
      })
      .then(response => response.json())
      .then((response) => {
        if (response.error) {
          auth.logout();
          browserHistory.push('/login');
        }
        dispatch(processUserDetailsRequestSuccess(response))
      })
      .catch((err) => {
        dispatch(processHTTPError(err))
      });
    }
  }
};

const ProfileApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileApp;
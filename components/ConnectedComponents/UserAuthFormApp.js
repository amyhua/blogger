import { connect } from 'react-redux';
import {
  initiateHTTPRequest,
  onSignUpEmailChange,
  onSignUpPasswordChange,
  processHTTPError 
} from '../../actions';

import { browserHistory } from 'react-router'

import { auth } from '../UserAuth/services/user-auth-service';

import UserAuthForm from '../UserAuth/UserAuthForm';

import fetch from 'isomorphic-fetch';


const mapStateToProps = (state, ownProps) => {
  return {
    userAuthForm: state.userAuthForm || {},
    requestPending: state.requestPending || false
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEmailChange: (email) => {
      dispatch(onSignUpEmailChange(email))
    },

    onPasswordChange: (password) => {
      dispatch(onSignUpPasswordChange(password))
    },

    onFormSubmit: (isSignUp, userAuthForm) => {
      dispatch(initiateHTTPRequest());

      const url = isSignUp ? '/api/user/signup' : '/api/user/login'
      fetch(url, {
        method: 'POST',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userAuthForm) 
      })
      .then(response => response.json())
      .then((response) => {
        if (response.error) {
          alert (response.message)
        } else {
          auth.login(response.token)
          browserHistory.push('/profile/' + response.id)
        }
      })
      .catch((err) => dispatch(processHTTPError(err)));
    }
  }
};

const UserAuthFormApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuthForm);

export default UserAuthFormApp;
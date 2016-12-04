import { connect } from 'react-redux';
import {
  initiateHTTPRequest,
  onSignUpEmailChange,
  onSignUpPasswordChange,
  processHTTPError
} from '../actions';

import { browserHistory } from 'react-router';

import auth from '../services/auth';

import UserAuthForm from '../components/UserAuth/UserAuthForm';

import fetch from 'isomorphic-fetch';


const mapStateToProps = (state) => {
  return {
    userAuthForm: state.userAuthForm,
    requestPending: state.requestPending,
    userError: state.userError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailChange: (email) => {
      dispatch(onSignUpEmailChange(email));
    },

    onPasswordChange: (password) => {
      dispatch(onSignUpPasswordChange(password));
    },

    onFormSubmit: (isSignUp, userAuthForm) => {
      dispatch(initiateHTTPRequest());

      const url = isSignUp ? '/api/user/signup' : '/api/user/login';
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
          alert(response.message);
        } else {
          auth.login(response.token);
          browserHistory.push('/profile/' + response.id);
        }
      })
      .catch((err) => dispatch(processHTTPError(err)));
    }
  };
};

const UserAuthFormApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuthForm);

export default UserAuthFormApp;

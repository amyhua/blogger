export const HTTP_REQUEST_REQUEST = 'common/HTTP_REQUEST_REQUEST';
export const HTTP_REQUEST_FAILURE = 'common/HTTP_REQUEST_FAILURE';

export const POSTS_LIST_SUCCESS = 'postsList/POSTS_LIST_SUCCESS';
export const POST_DETAIL_SUCCESS = 'post/POST_SUCCESS';

export const POST_FORM_TITLE = 'postForm/POST_FORM_TITLE';
export const POST_FORM_BODY = 'postForm/POST_FORM_BODY';

export const COMMENT_BOX_CHANGE = 'commentBox/COMMENT_BOX_CHANGE';
export const COMMENT_BOX_SUBMIT = 'commentBox/COMMENT_BOX_SUBMIT';

export const USER_SIGNUP_EMAIL = 'userAuth/USER_SIGNUP_EMAIL';
export const USER_SIGNUP_PASSWORD = 'userAuth/USER_SIGNUP_PASSWORD';
export const USER_DETAILS_SUCCESS = 'userAuth/USER_DETAILS_SUCCESS';
export const USER_DETAILS_FAILURE = 'userAuth/USER_DETAILS_FAILURE';


export const initiateHTTPRequest = () => {
  return {
    type: HTTP_REQUEST_REQUEST
  };
};

export const processHTTPError = error => {
  return {
    type: HTTP_REQUEST_FAILURE,
    error
  };
};

export const processPostListRequestSuccess = (response) => {
  return {
    type: POSTS_LIST_SUCCESS,
    data: response && response.posts || [],
  };
};

export const processPostDetailsRequestSuccess = data => {
  return {
    type: POST_DETAIL_SUCCESS,
    data: data && data.post || {}
  };
};

export const processUserDetailsRequestSuccess = data => {
  return {
    type: USER_DETAILS_SUCCESS,
    userDetails: data
  };
};

export const processUserDetailsRequestFailure = error => {
  return {
    type: USER_DETAILS_FAILURE,
    error
  };
};

export const onPostFormTitleChange = title => {
  return {
    type: POST_FORM_TITLE,
    title
  };
};

export const onPostFormBodyChange = body => {
  return {
    type: POST_FORM_BODY,
    body
  };
};

export const onCommentBoxFormChange = text => {
  return {
    type: COMMENT_BOX_CHANGE,
    text
  };
};

export const onSignUpEmailChange = email => {
  console.log('onSignUpEmailChange', email);
  return {
    type: USER_SIGNUP_EMAIL,
    email
  };
};

export const onSignUpPasswordChange = password => {
  return {
    type: USER_SIGNUP_PASSWORD,
    password
  };
};

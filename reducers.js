import {
  HTTP_REQUEST_REQUEST,
  HTTP_REQUEST_FAILURE,
  POSTS_LIST_SUCCESS,
  POST_DETAIL_SUCCESS,
  POST_FORM_TITLE,
  POST_FORM_BODY,
  COMMENT_BOX_CHANGE,
  USER_SIGNUP_EMAIL,
  USER_SIGNUP_PASSWORD,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE
} from './actions';

const initialState = {
  data: [],
  postDetails: {
    tags: [],
    comments: []
  },
  postForm: {
    title: '',
    body: ''
  },
  commentForm: {
    text: ''
  },
  userAuthForm: {
    email: '',
    password: ''
  },
  userDetails: {
    email: ''
  },
  requestPending: false,
  error: false,
  userError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HTTP_REQUEST_REQUEST:
      return Object.assign({}, state, {
        requestPending: true
      });
    case HTTP_REQUEST_FAILURE:
      return Object.assign({}, state, {
        requestPending: false,
        error: action.error
      });

    case POSTS_LIST_SUCCESS:
      return Object.assign({}, state, {
        requestPending: false,
        error: false,
        data: action.data
      });
    case POST_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        requestPending: false,
        error: false,
        postDetails: action.data,
        userAuthForm: action.data
      });
    case POST_FORM_TITLE:
      // TODO: compose reducers
      return Object.assign({}, state, {
        postForm: Object.assign({}, state.postForm, {
          title: action.title
        })
      });
    case POST_FORM_BODY:
      // TODO: compose reducers
      return Object.assign({}, state, {
        postForm: Object.assign({}, state.postForm, {
          body: action.body
        })
      });
    case COMMENT_BOX_CHANGE:
      // TODO: compose reducers
      return Object.assign({}, state, {
        commentForm: Object.assign({}, state.commentForm, {
          text: action.text
        })
      });
    case USER_SIGNUP_EMAIL:
      // TODO: compose reducers
      return Object.assign({}, state, {
        userAuthForm: Object.assign({}, state.userAuthForm, {
          email: action.email
        })
      });
    case USER_SIGNUP_PASSWORD:
      // TODO: compose reducers
      return Object.assign({}, state, {
        userAuthForm: Object.assign({}, state.userAuthForm, {
          password: action.password
        })
      });
    case USER_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        userDetails: action.userDetails
      });
    case USER_DETAILS_FAILURE:
      return Object.assign({}, state, {
        userError: action.error
      });
    default:
      return state;
  }
};


import {
  HTTP_REQUEST_START,
  HTTP_REQUEST_FAILURE,
  POSTS_LIST_SUCCESS,
  POST_DETAIL_SUCCESS,
  POST_FORM_TITLE,
  POST_FORM_BODY,
  POST_FORM_SUBMIT,
  COMMENT_BOX_CHANGE,
  USER_SIGNUP_EMAIL,
  USER_SIGNUP_PASSWORD,
  USER_DETAILS_SUCCESS,
} from '../actions';

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
    username: ''
  },
  requestPending: false,
  error: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case HTTP_REQUEST_START: 
      return Object.assign({}, state, {
        requestPending: true
      });

    case HTTP_REQUEST_FAILURE: {
      return Object.assign({}, state, {
        requestPending: false,
        error: action.error
      })
    }

    case POSTS_LIST_SUCCESS: {
      return Object.assign({}, state, {
        requestPending: false,
        error: false,
        data: action.data
      });
    }

    case POST_DETAIL_SUCCESS: {
      return Object.assign({}, state, {
        requestPending: false,
        error: false,
        postDetails: action.data,
        postForm: action.data
      });
    }

    case POST_FORM_TITLE: {
      const postForm = Object.assign({}, state.postForm, {
        title: action.title
      });

      return Object.assign({}, state, {
        postForm
      });

    }

    case POST_FORM_BODY: {
      const postForm = Object.assign({}, state.postForm, {
        body: action.body
      });

      return Object.assign({}, state, {
        postForm
      });
    }

    case COMMENT_BOX_CHANGE: {
      const commentForm = Object.assign({}, state.commentForm, {
        text: action.text
      });
      return Object.assign({}, state, {
        commentForm
      });
    }

    case USER_SIGNUP_EMAIL: {
      const userAuthForm = Object.assign({}, state.userAuthForm, {
        email: action.email
      });
      return Object.assign({}, state, {
        userAuthForm
      });
    }

    case USER_SIGNUP_PASSWORD: {
      const userAuthForm = Object.assign({}, state.userAuthForm, {
        password: action.password
      });
      return Object.assign({}, state, {
        userAuthForm
      });
    }

    case USER_DETAILS_SUCCESS: {
      return Object.assign({}, state, {
        userDetails: action.userDetails
      });
    }

    default:
      return state;
  }
}
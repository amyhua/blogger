
export const HTTP_REQUEST_START = 'common/HTTP_REQUEST_START'
export const HTTP_REQUEST_FAILURE = 'common/HTTP_REQUEST_FAILURE'

export const POSTS_LIST_SUCCESS = 'postsList/POSTS_LIST_SUCCESS'
export const POST_DETAIL_SUCCESS = 'post/POST_SUCCESS'

export const POST_FORM_TITLE = 'postForm/POST_FORM_TITLE'
export const POST_FORM_BODY = 'postForm/POST_FORM_BODY'
export const POST_FORM_SUBMIT = 'postForm/POST_FORM_SUBMIT'

export const COMMENT_BOX_CHANGE = 'commentBox/COMMENT_BOX_CHANGE'
export const COMMENT_BOX_SUBMIT = 'commentBox/COMMENT_BOX_SUBMIT'

export const USER_SIGNUP_EMAIL = 'userAuth/USER_SIGNUP_TITLE'
export const USER_SIGNUP_PASSWORD = 'userAuth/USER_SIGNUP_PASSWORD'
export const USER_DETAILS_SUCCESS = 'userAuth/USER_DETAILS_SUCCESS'
		

export const initiateHTTPRequest = () => {
	return {
		type: HTTP_REQUEST_START
	}
}

export const processHTTPError = error => {
	return {
		type: HTTP_REQUEST_FAILURE,
		error
	}
}

export const processPostListRequestSuccess = (response) => {
	return {
		type: POSTS_LIST_SUCCESS,
		data: response && response.posts || [],
	}
}

export const processPostDetailsRequestSuccess = (response) => {
	return {
		type: POST_DETAIL_SUCCESS,
		data: response && response.post || {}
	}
}

export const processUserDetailsRequestSuccess = (response) => {
	return {
		type: USER_DETAILS_SUCCESS,
		userDetails: response
	}
}

export const onPostFormTitleChange = (title) => {
	return {
		type: POST_FORM_TITLE,
		title
	}
}

export const onPostFormBodyChange = (body) => {
	return {
		type: POST_FORM_BODY,
		body
	}
}

export const onCommentBoxFormChange = (text) => {
	return {
		type: COMMENT_BOX_CHANGE,
		text
	}
}

export const onSignUpEmailChange = (email) => {
	return {
		type: USER_SIGNUP_EMAIL,
		email
	}
}

export const onSignUpPasswordChange = (password) => {
	return {
		type: USER_SIGNUP_PASSWORD,
		password
	}
}
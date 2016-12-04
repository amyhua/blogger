class Auth {
	login(token) {
		localStorage.setItem('token', token);
	}

	getToken() {
		return localStorage.getItem('token');
	}

	logout() {
		localStorage.removeItem('token');
	}

	isLoggedIn() {
		return !!localStorage.getItem('token');
	}
};

const auth = new Auth();

export default auth;
var express = require('express');
var router = express.Router();

module.exports = function(passport) {
	// GET /api/users
	router.get('/', function(req, res) {
		res.render('index');
	});

	// POST /api/user/signup
	router.post('/signup', function(req, res, next) {
		passport.authenticate('local-signup', function(err, user, info) {
			if (err) {
				return next(err); // will generate a 500 error
			}

			if (!user) {
				return next(new Error(info));
			}

			req.login(user, function(loginErr) {
				if (loginErr) {
					return next(loginErr);
				}
				return res.json(user);
			});
		})(req, res, next);
	});

	// POST /api/user/login
	router.post('/login', function(req, res, next) {
		passport.authenticate('local-login', function(err, user, info) {
			if (err) {
				return next(err); // will generate a 500 error
			}

			if (!user) {
				return next(new Error(info));
			}

			req.login(user, function(loginErr) {
				if (loginErr) {
					return next(loginErr);
				}
				return res.json(user);
			});
		})(req, res, next);
	});

	return router;
};

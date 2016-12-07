var express = require('express');
var router = express.Router();
const models  = require('../models/');

// GET /api/protected/profile/:id
router.get('/profile/:id', function(req, res, next) {
	// req.user.id := Number, req.params.id := string, so test for soft equality
	// tell eslint to ignore strict equality rule below
	// see http://eslint.org/docs/2.0.0/user-guide/configuring#configuring-rules
	/*eslint eqeqeq:0, curly: 2*/
	if (req.params.id != req.user.id) {
		return next(new Error('You do not have access to this information'));
	}
	models.users.findById(req.user.id)
	.then(function(user) {
		res.json({
			email: user.email,
			id: user.id,
		});
	});
});

module.exports = router;

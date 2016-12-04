var express = require('express');
var router = express.Router();
const models  = require('../models/');

// GET /api/protected/profile/:id
router.get('/profile/:id', function(req, res, next) {
	if (req.params.id != req.user.id) {
		return next({error:true, message: 'You do not have access to this information'})
	}
	models.users.findById(req.user.id)
	.then(function(user) {
		res.json({
			email:user.email,
			id: user.id,
		});
	});
});

module.exports = router;
const express = require('express');
const router = express.Router();
const handler = require('../handlers')


router.route('/signup').post(handler.user.createUser);
router.route('/login').post(handler.user.login);



module.exports = router

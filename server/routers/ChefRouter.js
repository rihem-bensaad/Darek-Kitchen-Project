const express = require('express');
const router = express.Router();
const handler = require('../handlers')


// router.route('/signup').post(handler.chef.createChef);
router.route('/login').post(handler.chef.cheflogin);
router.route('/getlocation/:location').get(handler.chef.getChefbylocation);


module.exports = router
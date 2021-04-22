const express = require('express');
const router = express.Router();
const handler = require('../handlers')


router.route('').post(handler.auth.authentication)





module.exports = router
const express = require('express');
const router = express.Router();
const handler = require('../handlers')


router.route('/menu').post(handler.menu.postmenu);



module.exports = router

const express = require('express');
const router = express.Router();
const handler = require('../handlers')


router.route('/post').post(handler.menu.postmenu);
router.route('/get').get(handler.menu.getmenu);



module.exports = router

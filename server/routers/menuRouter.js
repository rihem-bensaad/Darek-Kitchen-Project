const express = require('express');
const router = express.Router();
const handler = require('../handlers')


router.route('/post').post(handler.menu.postmenu);
router.route('/get').get(handler.menu.getmenu);
router.route('/get/:ID_menu').get(handler.menu.getMenuById);



module.exports = router

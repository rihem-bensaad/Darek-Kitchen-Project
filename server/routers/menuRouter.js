const express = require('express');
const router = express.Router();
const handler = require('../handlers')


router.route('/post').post(handler.menu.postmenu);
router.route('/get').get(handler.menu.getmenu);
router.route('/get/:ID_menu').get(handler.menu.getMenuById);
router.route('/delete/:id').delete(handler.menu.deletemenu);
router.route('/update/:id').put(handler.menu.updateMenu);


module.exports = router

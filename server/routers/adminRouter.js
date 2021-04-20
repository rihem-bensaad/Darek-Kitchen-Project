const express = require('express');
const router = express.Router();
const handler = require('../handlers')


router.route('/signup').post(handler.admin.addAdmin);
// router.route('/login').post(handler.admin.adminLogin);
router.route('/addbrand').post(handler.admin.postbrand);
router.route('/removebrand/:id').delete(handler.admin.deletebrand);
router.route('/removeuser/:id').delete(handler.admin.deleteUser);
router.route('/removechef/:id').delete(handler.admin.deleteChef);
router.route('/updatebrand/:id').put(handler.admin.updateBrand);


module.exports = router
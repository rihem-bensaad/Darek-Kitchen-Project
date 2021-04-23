const express = require('express');
const router = express.Router();
const handler = require('../handlers')

router.route('/get').get(handler.brand.getBrands);
router.route('/add').post(handler.brand.postBrand);



module.exports = router

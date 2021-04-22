const express = require('express');
const router = express.Router();
const userController = require('../database/controllers/user.js')
const con = require('../database/config.js');



router.get('/getall', userController.getuser);

router.get('/:id', userController.getuserById);     
      
router.put('/:id', userController.edituser);

router.delete('/:id', userController.deleteuser);
       

module.exports = router;

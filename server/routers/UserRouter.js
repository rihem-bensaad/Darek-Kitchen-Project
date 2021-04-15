const express = require('express');
const router = express.Router();
const db = require("../database/controllers/Auth");
const handler = require('../handlers')
const mysql = require('mysql');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

router.route('/signup').post(handler.user.createUser)
router.route('/login').post(handler.user.login)
  


module.exports = router

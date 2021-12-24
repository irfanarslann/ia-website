const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const AuthController = require('../controllers/AuthController');
const { check } = require('express-validator');
// @route     GET api/auth
// @desc      Get Logged in user
// @access    Private
router.get('/', auth, AuthController.loadUser);

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  AuthController.login
);

module.exports = router;

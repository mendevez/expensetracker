const express = require('express');
const {
  loginWithUsernameAndPassword,
  register,
} = require('../controllers/auth');

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(loginWithUsernameAndPassword);

module.exports = router;

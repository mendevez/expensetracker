const express = require('express');
const { authGuard } = require('../middleware/auth');
const {
  loginWithUsernameAndPassword,
  register,
  getUser,
  updateUser,
} = require('../controllers/auth');

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(loginWithUsernameAndPassword);
router.route('/').get(authGuard, getUser).post(authGuard, updateUser);

module.exports = router;

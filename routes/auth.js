const express = require('express');
const {
  loginWithUsernameAndPassword,
  register,
} = require('../controllers/auth');

const router = express.Router();

router.route('/register').post(register);
router.post('/login', loginWithUsernameAndPassword);

module.exports = router;

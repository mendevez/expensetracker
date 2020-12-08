const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc        Register new user 
// @route       POST /api/v1/auth/register
// @access      Private
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  console.log(user);

  res.status(200).json({ success: true });
});

// @desc        Login with username and password
// @route       POST /api/v1/auth/login
// @access      Private
exports.loginWithUsernameAndPassword = asyncHandler((req, res, next) => {
  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse('Please enter an email and password', 400));
  }
});

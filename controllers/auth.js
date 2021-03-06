const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc        Get authenticated user
// @route       GET /api/v1/auth/
// @access      Private
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');
  res.status(200).json({ success: true, data: user });
});

// @desc        Update authenticated user
// @route       GET /api/v1/auth/:id
// @access      Private
exports.updateUser = asyncHandler(async (req,res,next) => {

  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(
      new ErrorResponse(`Expense with id: ${req.user.id} not found`, 404)
    );
  }
  res.status(200).json({ success: true, data: user });
  
})

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

  sendTokenResponse(user, 200, res);
});

// @desc        Login with username and password
// @route       POST /api/v1/auth/login
// @access      Private
exports.loginWithUsernameAndPassword = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse('Please enter an email and password', 400));
  }
  // Check if user exists and get password
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  //   Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid email or password', 401));
  }

  sendTokenResponse(user, 200, res);
});

// Get token from model, create cookie and send it in response
const sendTokenResponse = (user, statusCode, res) => {
  //   Create token
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    token,
  });
};

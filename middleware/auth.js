const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

exports.authGuard = asyncHandler(async (req, res, next) => {
  let token = req.header('x-auth-token');

  // Make sure token exists
  if (!token) {
    return next(
      new ErrorResponse('You are not authorized to acccess this route', 401)
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    return next(
      new ErrorResponse('User not authorized to access this rounte', 401)
    );
  }
});

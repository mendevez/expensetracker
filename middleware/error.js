const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Log to console for the developer
  console.log(err);

  //   Mongoose bad objectId
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;

    error = new ErrorResponse(message, 404);
  }

  //   Mongoose dupliate key
  if (err.code === 11000) {
    const message = 'Values entered already exist ';
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  console.log(err.stack.red);
  res.status(err.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

module.exports = errorHandler;

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const path = require('path');

// Load env var
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const expenses = require('./routes/expenses');
const auth = require('./routes/auth');

const app = express();

// Body parser
app.use(express.json());

app.use(cookieParser());

// Dev request logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/expenses', expenses);
app.use('/api/v1/auth', auth);

// Serve static assets in production
app.use(express.static(path.join(__dirname, 'client/build')));

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`.yellow
      .bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // Close server & exit process
  server.close(() => process.exit(1));
});

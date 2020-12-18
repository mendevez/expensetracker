const asyncHandler = require('../middleware/async');
const Expense = require('../models/Expense');
const ErrorResponse = require('../utils/errorResponse');
const helperFunctions = require('../utils/helperFunctions');
const moment = require('moment');
// @desc        Get all expenses
// @route       GET /api/v1/expenses
// @access      Private
exports.getExpenses = asyncHandler(async (req, res, next) => {
  const expenses = await Expense.find({ userId: req.user.id });
  res
    .status(200)
    .json({ success: true, count: expenses.length, data: expenses });
});

// @desc        Get single expense
// @route       GET /api/v1/expenses/:id
// @access      Private
exports.getExpense = asyncHandler(async (req, res, next) => {
  const expense = await Expense.findById(req.params.id);

  if (!expense) {
    return next(
      new ErrorResponse(`Expense with id: ${req.params.id} not found`, 404)
    );
  }
  res.status(200).json({ success: true, data: expense });
});

// @desc        Add new expense
// @route       POST /api/v1/expenses/:id
// @access      Private
exports.addExpense = asyncHandler(async (req, res, next) => {
  const expense = { ...req.body, userId: req.user.id };
  const response = await Expense.create(expense);
  res.status(201).json({ success: true, data: response });
});

// @desc        Update expense
// @route       PUT /api/v1/expenses/:id
// @access      Private
exports.updateExpense = asyncHandler(async (req, res, next) => {
  const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!expense) {
    return next(
      new ErrorResponse(`Expense with id: ${req.params.id} not found`, 404)
    );
  }
  res.status(200).json({ success: true, data: expense });
});

// @desc        Delete expense
// @route       DELETE /api/v1/expenses/:id
// @access      Private
exports.deleteExpense = asyncHandler(async (req, res, next) => {
  const expense = await Expense.findByIdAndDelete(req.params.id);

  if (!expense) {
    return next(
      new ErrorResponse(`Expense with id: ${req.params.id} not found`, 404)
    );
  }
  res.status(200).json({ success: true, data: {} });
});

// @desc        Sum all expenses by category
// @route       GET /api/v1/expenses/totalbycategory
// @access      Private
exports.getTotalByCategory = asyncHandler(async (req, res, next) => {
  const totalByCategory = await Expense.aggregate([
    { $match: { userId: req.user.id } },
    { $group: { _id: '$category', total: { $sum: '$cost' } } },
  ]);

  const totalByCategoryObject = helperFunctions.convertArrayToObject(
    totalByCategory
  );

  res.status(200).json({ success: true, data: totalByCategoryObject });
});

// @desc        Sum all expenses
// @route       GET /api/v1/expenses/total
// @access      Private
exports.getTotalCost = asyncHandler(async (req, res, next) => {
  let result = { total: 0 };
  const totalCost = await Expense.aggregate([
    { $match: { userId: req.user.id } },
    { $group: { _id: null, total: { $sum: '$cost' } } },
  ]);

  // Check if the total cost has no values and set it to the response if it does
  totalCost.length >= 1 ? (result = totalCost[0]) : result;

  res.status(200).json({ success: true, data: result });
});

// @desc        Sum all expenses by month
// @route       GET /api/v1/expenses/totalbymonth
// @access      Private
exports.getTotalCostByMonth = asyncHandler(async (req, res, next) => {
  const totalCostByMonth = await Expense.aggregate([
    {
      $project: {
        date: {
          $dateToString: {
            format: '%m-%Y',
            date: '$createdAt',
          },
        },
        cost: 1,
        userId: 1,
      },
    },
    {
      $match: {
        userId: req.user.id,
      },
    },
    {
      $group: {
        _id: '$date',
        total: { $sum: '$cost' },
      },
    },
  ]);

  const totalCostByMonthObject = helperFunctions.convertArrayToObject(
    totalCostByMonth
  );

  res.status(200).json({ success: true, data: totalCostByMonthObject });
});

// @desc        Sum all expenses for current week
// @route       GET /api/v1/expenses/totalcurrentweek
// @access      Private
exports.totalCostForCurrentWeek = asyncHandler(async (req, res, next) => {
  const startOfWeek = moment().startOf('isoWeek').toString();
  const endOfWeek = moment().endOf('isoWeek').toString();
  let result = { total: 0 };

  const totalCostCurrentWeek = await Expense.aggregate([
    {
      $match: {
        $and: [
          {
            createdAt: {
              $gte: new Date(startOfWeek),
              $lt: new Date(endOfWeek),
            },
          },
          {
            userId: req.user.id,
          },
        ],
      },
    },
    {
      $group: {
        _id: null,
        total: { $sum: '$cost' },
      },
    },
  ]);
  // Check if the total cost has no values and set it to the response if it does
  totalCostCurrentWeek.length >= 1
    ? (result = totalCostCurrentWeek[0])
    : result;

  return res.status(200).json({ success: true, data: result });
});

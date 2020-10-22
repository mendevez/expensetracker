const asyncHandler = require('../middleware/async');
const Expense = require('../models/Expense');
const ErrorResponse = require('../utils/errorResponse');

// @desc        Get all expenses
// @route       GET /api/v1/expenses
// @access      Private
exports.getExpenses = asyncHandler(async (req, res, next) => {
  const expenses = await Expense.find();
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
      new ErrorResponse(`Expense with id: ${req.params.id} not found`)
    );
  }
  res.status(200).json({ success: true, data: expense });
});

// @desc        Sum all expenses by category
// @route       GET /api/v1/expenses/total
// @access      Private
exports.getTotalByCategory = asyncHandler(async (req, res, next) => {
  let resultObject = {
    labels: [],
    data: [],
  };

  const result = await Expense.aggregate([
    {
      $match: {},
    },
    { $group: { _id: '$category', total: { $sum: '$cost' } } },
  ]);

  result.forEach((element) => {
    resultObject.labels.push(element._id);
    resultObject.data.push(element.total);
  });

  res.status(200).json({ success: true, data: resultObject });
});

// @desc        Add new expense
// @route       POST /api/v1/expenses/:id
// @access      Private
exports.addExpense = asyncHandler(async (req, res, next) => {
  const expense = await Expense.create(req.body);
  res.status(201).json({ success: true, data: expense });
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
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: expense });
});

// @desc        Delete expense
// @route       DELETE /api/v1/expenses/:id
// @access      Private
exports.deleteExpense = asyncHandler(async (req, res, next) => {
  const expense = await Expense.findByIdAndDelete(req.params.id);

  if (!expense) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: {} });

  next(error);
});

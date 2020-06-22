const ErrorResponse = require('../utils/errorResponse');
const Expense = require('../models/Expense');

// @desc        Get all expenses
// @route       GET /api/v1/expenses
// @access      Public
exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find();
    res
      .status(200)
      .json({ success: true, count: expenses.length, data: expenses });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc        Get all expenses
// @route       GET /api/v1/expenses/:id
// @access      Public
exports.getExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return next(new ErrorResponse(`Expense with id: ${req.params.id} not found`));
    }
    res.status(200).json({ success: true, data: expense });
  } catch (error) {
    // res.status(400).json({ success: false });
    next(new ErrorResponse(`Expense with id: ${req.params.id} not found`));
  }
};

// @desc        Add new expense
// @route       POST /api/v1/expenses/:id
// @access      Private
exports.addExpense = async (req, res, next) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json({ success: true, data: expense });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc        Update expense
// @route       PUT /api/v1/expenses/:id
// @access      Private
exports.updateExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!expense) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: expense });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
};

// @desc        Delete expense
// @route       DELETE /api/v1/expenses/:id
// @access      Private
exports.deleteExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
};

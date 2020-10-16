const Expense = require('../models/Expense');
const ErrorResponse = require('../utils/errorResponse');

// @desc        Get all expenses
// @route       GET /api/v1/expenses
// @access      Private
exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find();
    res
      .status(200)
      .json({ success: true, count: expenses.length, data: expenses });
  } catch (error) {
    next(error);
  }
};

// @desc        Get single expense
// @route       GET /api/v1/expenses/:id
// @access      Private
exports.getExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return next(
        new ErrorResponse(`Expense with id: ${req.params.id} not found`)
      );
    }
    res.status(200).json({ success: true, data: expense });
  } catch (error) {
    // res.status(400).json({ success: false });
    next(error);
  }
};

// @desc        Sum all expenses by category
// @route       GET /api/v1/expenses/total
// @access      Private
exports.getTotalByCategory = async (req, res, next) => {
  let resultObject = {
    labels: [],
    data: [],
  };
  try {
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
  } catch (error) {
    next(error);
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
    next(error);
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
    next(error);
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
    next(error);
  }
};

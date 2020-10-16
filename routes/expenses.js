const express = require('express');
const {
  getExpenses,
  getExpense,
  addExpense,
  updateExpense,
  deleteExpense,
  getTotalByCategory,
} = require('../controllers/expenses');

// Initialize Router
const router = express.Router();

router.route('/').get(getExpenses).post(addExpense);
router.route('/total').get(getTotalByCategory);
router.route('/:id').get(getExpense).put(updateExpense).delete(deleteExpense);

module.exports = router;

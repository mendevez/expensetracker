const express = require('express');
const {
  getExpenses,
  getExpense,
  addExpense,
  updateExpense,
  deleteExpense,
  getTotalByCategory,
  getTotalCost
} = require('../controllers/expenses');

// Initialize Router
const router = express.Router();

router.route('/').get(getExpenses).post(addExpense);
router.route('/totalbycategory').get(getTotalByCategory);
router.route('/total').get(getTotalCost);
router.route('/:id').get(getExpense).put(updateExpense).delete(deleteExpense);
  
module.exports = router;

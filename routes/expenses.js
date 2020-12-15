const express = require('express');
const {
  getExpenses,
  getExpense,
  addExpense,
  updateExpense,
  deleteExpense,
  getTotalByCategory,
  getTotalCost,
} = require('../controllers/expenses');
const { authGuard } = require('../middleware/auth');

// Initialize Router
const router = express.Router();

router.route('/').get(authGuard, getExpenses).post(authGuard, addExpense);
router.route('/totalbycategory').get(authGuard, getTotalByCategory);
router.route('/total').get(authGuard, getTotalCost);
router
  .route('/:id')
  .get(authGuard, getExpense)
  .put(updateExpense)
  .delete(deleteExpense);

module.exports = router;

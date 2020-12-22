import { createSelector } from 'reselect';

export const selectExpense = (state, id) => state.expenses[id];
export const selectExpenses = (state) => state.expenses.expenses;
export const selectKeyword = (state) => state.expenses.searchKeyword;
export const selectTotalCost = (state) => state.expenses.totalCost;
export const selectTotalCostForCurrentWeek = (state) =>
  state.expenses.totalCostCurrentWeek;
export const selectLoading = (state) => state.expenses.isLoading;
export const selectTotalByCategoryChartData = (state) =>
  state.charts.totalByCategoryChartData;
export const selectTotalByMonthChartData = (state) =>
  state.charts.totalCostByMonthChartData;

export const selectExpensesByName = createSelector(
  selectExpenses,
  selectKeyword,
  (expenses, keyword) => {
    if (keyword.length === 0) {
      return expenses;
    }
    return expenses.filter((element) =>
      element.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }
);

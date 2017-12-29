import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpensesSummary';
const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary></ExpenseSummary>
    <ExpenseListFilters></ExpenseListFilters>
    <ExpenseList></ExpenseList>
  </div>
);
export default ExpenseDashboardPage;

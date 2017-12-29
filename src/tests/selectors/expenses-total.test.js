import selectExpensesTotal from '../../selector/expenses-total';
import expenses from '../fixtures/expenses';
test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toEqual(0);
});
test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toEqual(195);
});
test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(5790);
});

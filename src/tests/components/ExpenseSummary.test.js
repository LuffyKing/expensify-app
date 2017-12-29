import React from 'react';
import {shallow} from 'enzyme';
import  {ExpenseSummary} from '../../components/ExpensesSummary';
import  selectExpensesTotal from '../../selector/expenses-total';
import expenses from '../fixtures/expenses';
import numeral from 'numeral';
let wrapper;
beforeEach(() => {
  wrapper = shallow(<ExpenseSummary expenseCount={0} expenseTotal={0}></ExpenseSummary>);

});
test('this test if the component renders', ()=>{
  expect(wrapper).toMatchSnapshot();
});
test('this test for one expense', ()=>{
  wrapper.setProps({
    expenseCount:[expenses[0]].length,
    expenseTotal:selectExpensesTotal([expenses[0]])
  });
  expect(wrapper).toMatchSnapshot();
});
test('this test for three expenses', ()=>{
  wrapper.setProps({
    expenseCount:expenses.length,
    expenseTotal:selectExpensesTotal(expenses)
  });
  expect(wrapper).toMatchSnapshot();
});

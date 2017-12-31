import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';
let wrapper,history,startEditExpense,removeExpense,startRemoveExpense;
beforeEach(() => {
  startEditExpense = jest.fn();
  removeExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {push:jest.fn()};
  wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} removeExpense={removeExpense} history={history} expense={expenses[2]}></EditExpensePage>);
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});
test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});
test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id);
});

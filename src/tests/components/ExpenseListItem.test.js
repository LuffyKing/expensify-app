import React from 'react';
import {shallow} from 'enzyme';
import  {ExpenseListItem} from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
test('this tests the ExpenseListItem component', ()=>{
  let expense = expenses[0];
  const wrapper = shallow(<ExpenseListItem {...expense} index={0} key={expense.id}></ExpenseListItem>);
  expect(wrapper).toMatchSnapshot();
});

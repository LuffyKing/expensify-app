import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
test('Should test ExpenseDashboard component',()=>{
  const wrapper = shallow(<ExpenseDashboardPage></ExpenseDashboardPage>);
  expect(wrapper).toMatchSnapshot();
});

import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import {SingleDatePicker} from 'react-dates';
import expenses from '../fixtures/expenses';
test('should render ExpenseForm correctly',() => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  expect(wrapper).toMatchSnapshot();
});
test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}></ExpenseForm>);
  expect(wrapper).toMatchSnapshot();

});
test('should render error for invalid form submission',() => {

  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit',{
    preventDefault:() => {}
  });
  expect(wrapper.state().error.length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();

});

test('should set description on input change',() => {
  const value = 'A new description!';
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find('input').at(0).simulate('change', {
    target:{value}
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change',() => {
  const value = 'A new note!';
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find('textarea').simulate('change',{
    target:{value}
  });
  expect(wrapper.state('note')).toBe(value);
});
test('should set amount if valid input', ()=>{
  const value = 23.50;
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find('input').at(1).simulate('change',{
    target:{value}
  });
  expect(wrapper.state('amount')).toBe(value);
});
test('should not set amount if valid is not input', ()=>{
  const value = 23.5789;
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find('input').at(1).simulate('change',{
    target:{value}
  });
  expect(wrapper.state('amount')).toBe('');
});
test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}></ExpenseForm>);
  wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
  });
  expect(wrapper.state().error).toBe('');
  let ex1 = {...expenses[0]};
  delete ex1.id;
  expect(onSubmitSpy).toHaveBeenLastCalledWith(ex1);

});

test('Should set new date on date change',()=>{
  const now = moment();
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find(SingleDatePicker).prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});
test('should set calendar focus on change',() => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm></ExpenseForm>);
  wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);

});

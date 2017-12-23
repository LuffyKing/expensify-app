import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import {filters, altFilters} from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate,wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters
                      filters={filters}
                      setTextFilter={setTextFilter}
                      sortByDate={sortByDate}
                      sortByAmount={sortByAmount}
                      setEndDate={setEndDate}
                      setStartDate={setStartDate}
                      ></ExpenseListFilters>);
});

test('should render ExpenseListFilters correctly',()=>{
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly',()=>{
  wrapper.setProps({
    filters:altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', ()=>{
  const value = 'Gum';
  wrapper.find('input').simulate('change',{
    target:{value}
  });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle set start date', ()=>{
  const startDate = moment();
  const endDate = undefined;
  const value = {startDate, endDate};
  wrapper.find(DateRangePicker).prop('onDatesChange')(value);
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
});
test('should handle set end date', ()=>{
  const startDate = undefined;
  const endDate = moment();
  const value = {startDate, endDate};
  wrapper.find(DateRangePicker).prop('onDatesChange')(value);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should sort by date', ()=>{
  const value = 'date';
  wrapper.find('select').simulate('change',{
    target:{value}
  });
  expect(sortByDate).toHaveBeenCalled();
  expect(sortByAmount).not.toHaveBeenCalled();
});

test('should sort by amount', ()=>{
  const value = 'amount';
  wrapper.find('select').simulate('change',{
    target:{value}
  });
  expect(sortByDate).not.toHaveBeenCalled();
  expect(sortByAmount).toHaveBeenCalled();
});
test('should handle date focus changes', ()=>{
  const calendarFocused = 'endDate';
  wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

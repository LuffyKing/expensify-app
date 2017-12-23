import moment from 'moment';
import {setTextFilter, sortByDate, sortByAmount, setStartDate,  setEndDate } from '../../actions/filters';
test(
  'Should generate set start date action object',()=>{
    const action =  setStartDate(moment(0));
    expect(action).toEqual({
      type:'SET_START_DATE',
      startDate:moment(0)
    });


  }
);

test('should generate set end date action object',()=>{
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate:moment(0)

  });

});

test('should generate set text filter default value',()=>{
  const action = setTextFilter('');
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    searchText:''
  });

});

test('should generate set text filter with provided value',()=>{
  const action = setTextFilter('damola');
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    searchText:'damola'
  });

});

test('should generate sort by date',()=>{
  const action = sortByDate();
  expect(action).toEqual({
    type:'SORT_BY_DATE',
    sortBy:'date',
  });

});

test('should generate sort by amount',()=>{
  const action = sortByAmount();
  expect(action).toEqual({
    type:'SORT_BY_AMOUNT',
    sortBy:'amount',
  });

});

/*
//  SET_TEXT_FILTER
export const setTextFilter = (searchText='') => {
  return {
    type:'SET_TEXT_FILTER',
    searchText
  }
};
//  SORT_BY_DATE
export const sortByDate = () => {
  return {
    type:'SORT_BY_DATE',
    sortBy:'date',

  }
};
//  SORT_BY_AMOUNT
export const sortByAmount = () => {
  return {
    type:'SORT_BY_AMOUNT',
    sortBy:'amount',
  }
};
//  SET_START_DATE
export const setStartDate = (startDate) => {
  return {

    type:'SET_START_DATE',
    startDate,

  }
};
//  SET_END_DATE
export const setEndDate = (endDate) => {
  return {
    type:'SET_END_DATE',
    endDate,
  }
};
*/

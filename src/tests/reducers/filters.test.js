import moment from 'moment';
import filterReducer from '../../reducers/filters';
test('should setup default filter values', ()=>{
  const state = filterReducer(undefined, {type:'@@INIT'});
  expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
  });
});
test('should set sortBy to amount', ()=>{
  const state = filterReducer(undefined, {type:'SORT_BY_AMOUNT', sortBy:'amount'});
  expect(state.sortBy).toBe('amount');

});
test('should set sortBy to date', ()=>{
  const currentState = {
    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'amount',
  };
  const action = {type:'SORT_BY_DATE', sortBy:'date'};
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});
test('should set text filter',()=>{
  const action = {type:'SET_TEXT_FILTER',searchText:'damola'};
  const state =  filterReducer(undefined, action);
  expect(state.text).toBe('damola');
});

test('should set start date', ()=>{
  const action = {type:'SET_START_DATE', startDate:moment(0)};
  const state = filterReducer(undefined, action);
  expect(state.startDate).toEqual(moment(0));
});
test('should set end date', ()=>{
  const action = {type:'SET_END_DATE', endDate:moment(0)};
  const state = filterReducer(undefined, action);
  expect(state.endDate).toEqual(moment(0));
});

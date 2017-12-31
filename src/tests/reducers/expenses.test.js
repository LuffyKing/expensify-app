import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
test('should set default state',()=>{
  const state = expensesReducer(undefined, {type:'@@INT'});
  expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
  const action ={
    type:'REMOVE_EXPENSE',
    id:expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expenses if id not found',()=>{
  const action = {
    type:'REMOVE_EXPENSE',
    id:'1234',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1],expenses[2]]);
});
//should add an expense
test('should add an expense', ()=>{
  const testExpense = {
    id:'3',
    description:'Credit Card',
    note:'',
    amount:4500,
    createdAt:moment(0).add(4,'days').valueOf()
  };
  const action = {
    type:'ADD_EXPENSE',
    expense:testExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses.concat(testExpense));


});
//should edit an expense
test('should edit an expense', () => {
  const editExpense = expenses[0];
  const action = {
    type:'EDIT_EXPENSE',
    id:editExpense.id,
    updates:{
      amount:9000,
    },
  }
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toEqual(9000);

});
//should not edit expense if expense not found
test('should not edit expense if expense not found', () => {
  const editExpense = expenses[0];
  const action = {
    type:'EDIT_EXPENSE',
    id:'123',
    updates:{
      amount:9000,
    },
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].amount).toEqual(195);
});
test('should set expenses',()=>{
  const testExpense = {
    id:'3',
    description:'Credit Card',
    note:'',
    amount:4500,
    createdAt:moment(0).add(4,'days').valueOf()
  };
  let action = {
    type:'SET_EXPENSES',
    expenses
  };
  let state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
  action = {
    type:'SET_EXPENSES',
    expenses:[testExpense]
  };
  state = expensesReducer(expenses, action);
  expect(state).toEqual([testExpense])
});

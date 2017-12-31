import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,addExpense, editExpense, removeExpense, setExpenses,startSetExpenses,startRemoveExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses.js';
import database from '../../firebase/firebase'
const createMockStore = configureMockStore([thunk]);
beforeEach(() => {
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt})=>{
    expensesData[id] = {description,note,amount,createdAt};

  });
  database.ref('expenses').set(expensesData);
});
test('should setup remove expense action expense', ()=>{
  const action = removeExpense({id:'abc123'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'abc123',
  });

});

test('should setup edit expense action expense', ()=>{

  const action = editExpense('abc124', {amount:100});
  expect(action).toEqual({
    id:'abc124',
    type:'EDIT_EXPENSE',
    updates:{amount:100},
  });

});

test('should setup add action object with provided values', ()=>{
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:expenses[0]
  });



});
test('should add expense to database and store',(done)=>{
  const store = createMockStore({});
  const expenseData = {
    description:'Mouse',
    amount:3000,
    note:'This one is better',
    createdAt:3000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions  = store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        id:expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
}).then((snapshot)=>{
  expect(snapshot.val()).toEqual(expenseData);
  done();
});
});

test('should add expense with defautls to database and store',(done)=>{
  const store = createMockStore({});
  const expenseData = {
  }
  const defaultExpensedata = {
    description:'',
    note:'',
    amount:0,
    createdAt:0,
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions  = store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        id:expect.any(String),
        ...defaultExpensedata
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
}).then((snapshot)=>{
  expect(snapshot.val()).toEqual(defaultExpensedata);
  done();
});
});
test('should set up set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type:'SET_EXPENSES',
    expenses
  });
});
test('should fetch the expense from firebase',(done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type:'SET_EXPENSES',
      expenses
    });
    done();
  });
});

test('should delete the expense from firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;
  store.dispatch(startRemoveExpense({id})).then(() => {
    const action =store.getActions();
    expect(action[0]).toEqual({
      type:'REMOVE_EXPENSE',
      id
    });
    return database.ref(`expenses/${id}`).once('value');

  }).then((snapshot) => {
    const val = snapshot.val();
    expect(snapshot.val()).toBeFalsy();
    done();
  });

});
// test('should setup add action object with defaults', ()=>{
//   const action = addExpense();
//   expect(action).toEqual({
//     type:'ADD_EXPENSE',
//     expense:{
//
//     id:expect.any(String),
//     description:'',
//     notes:'',
//     amount:0,
//     createdAt:0
//
//   }
// }
//   );
//
// });
/*
import uuid from 'uuid';

//ADD expense
export const addExpense = ({
  description ='',
 notes='',
 amount=0,
 createdAt=0
} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense:{
      id:uuid(),
      description,
      notes,
      amount,
      createdAt,


  }
}
};
//  REMOVE_EXPENSE
export const removeExpense = ({id}) => {
  return {
    type:'REMOVE_EXPENSE',
    id

  }
};
//  EDIT_EXPENSE
export const editExpense = (id, updates) => {
  return {
    type:'EDIT_EXPENSE',
    id,
    updates,
  }
};
*/

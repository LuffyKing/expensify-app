import {addExpense, editExpense, removeExpense} from '../../actions/expenses';
import uuid from 'uuid';
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
  const action = addExpense({
    description:'mount',
    notes:'wawu',
    amount:4000,
    createdAt:2000
  });
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{

    id:expect.any(String),
    description:'mount',
    notes:'wawu',
    amount:4000,
    createdAt:2000
  }});



});

test('should setup add action object with defaults', ()=>{
  const action = addExpense();
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{

    id:expect.any(String),
    description:'',
    notes:'',
    amount:0,
    createdAt:0

  }
}
  );

});
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

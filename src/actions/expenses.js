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

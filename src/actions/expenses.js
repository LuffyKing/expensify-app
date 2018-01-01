import uuid from 'uuid';
import database from '../firebase/firebase'
//ADD expense
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
}

};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) =>{
    const uid = getState().auth.uid;
    const {
      description='',
      note='',
      amount=0,
      createdAt=0,
    } = expenseData;
    const expense = {description, note, amount, createdAt};
    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id:ref.key,
        ...expense
      }));
    });
  };
;}
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
// set_expenses
export const setExpenses = (expenses) => {
  return {  type:'SET_EXPENSES',
  expenses}
};
//export const startSetExpenses
export const startSetExpenses = () => {
  return (dispatch, getState) =>{
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot)=>{
        expenses.push({
          id:childSnapshot.key,
          ...childSnapshot.val()
        });
      });
    dispatch(setExpenses(expenses));
  }).catch((e)=>{
    console.log('The following error occured',e)
  });
}
}
export const startRemoveExpense = ({id}) => {
  return (dispatch, getState) =>{
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {

      dispatch(removeExpense({id}));
    }).catch((e)=>{
      console.log('The following error occured',e)
    });
  }
};
export const startEditExpense = (id, updates) =>{
  return (dispatch, getState) =>{
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).update({
        ...updates
      }).then(() => {
      dispatch(editExpense(id, updates));
    }).catch((e)=>{
      console.log('The following error occured',e);
    });
  };
};

import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
//  ADD_EXPENSE
const addExpense = ({
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
const removeExpense = ({id}) => {
  return {
    type:'REMOVE_EXPENSE',
    id

  }
};
//  EDIT_EXPENSE
const editExpense = (id, updates) => {
  return {
    type:'EDIT_EXPENSE',
    id,
    updates,
  }
};
//  SET_TEXT_FILTER
const setTextFilter = (searchText='') => {
  return {
    type:'SET_TEXT_FILTER',
    searchText
  }
};
//  SORT_BY_DATE
const sortByDate = () => {
  return {
    type:'SORT_BY_DATE',
    sortBy:'date',

  }
};
//  SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type:'SORT_BY_AMOUNT',
    sortBy:'amount',
  }
};
//  SET_START_DATE
const setStartDate = (startDate) => {
  return {

    type:'SET_START_DATE',
    startDate,

  }
};
//  SET_END_DATE
const setEndDate = (endDate) => {
  return {
    type:'SET_END_DATE',
    endDate,
  }
};

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter((element) =>{return action.id!==element.id});
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id===action.id){
          return{
            ...expense,
            ...action.updates,
          };
        }
        else{
          return expense;
        }

      });
    default:
      return state;

  }
};
// Filters Reducer

// text => '', sortBy => 'date', startDate
const filterReducerDefaultState= {
  text:'',
  sortBy:'date',
  startDate:undefined,
  endDate:undefined,

};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text:action.searchText,
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy:action.sortBy,
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy:action.sortBy,

      }
    case 'SET_START_DATE':
      return{
        ...state,
        startDate:action.startDate,

      }
    case 'SET_END_DATE':
      return{
        ...state,
        endDate:action.endDate,

      }
    default:
      return state;

  }
}
// timestamps(milliseconds)
// January 1st 1970 (unix epoch)
// 33400, 10 -283

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const regTest = new RegExp(text, 'i');
    const textMatch = ~expense.description.search(regTest);
    return startDateMatch && endDateMatch && textMatch;

  }).sort((expense1, expense2)=>{
    if(sortBy==='date'){
      return expense1.createdAt - expense2.createdAt;
    }else if (sortBy==='amount') {
      return -1*(expense1.amount - expense2.amount);

    }
    


  });

};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,


  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
const e1 = store.dispatch(addExpense({description:'coffee',amount:100, createdAt:1000}));

const e2 = store.dispatch(addExpense({description:'coffee',amount:300, createdAt:0}));
const e3 = store.dispatch(addExpense({description:'rent',amount:500, createdAt:-1000}));
// store.dispatch(
//   removeExpense({id: e1.expense.id})
// );
// store.dispatch(editExpense(e1.expense.id, {amount:500}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('power'));
// store.dispatch(setTextFilter(''));
// store.dispatch(sortByDate());
store.dispatch(setStartDate(125));
store.dispatch(setStartDate(-10000));
store.dispatch(sortByAmount());
//store.dispatch(setTextFilter('re'));

// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters:{
    text:'rent',
    sortBy: 'amount', //Date or amount
    startDate: undefined,
    endDate: undefined,
  }
};

import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate} from './actions/filters'
import expensesReducer from './reducers/expenses'
import filterReducer from './reducers/filters'
import getVisibleExpenses from './selector/expenses'
import { Provider } from 'react-redux';
// import './playground/redux-101'
const store = configureStore();
const waterBill = addExpense({description:'water bill', amount:6000,createdAt:1000});
const gasBill = addExpense({description:'gas bill', amount:8000,createdAt:2000});
const powerBill = addExpense({description:'power bill', amount:9000,createdAt:3000});


store.subscribe(() => {
  const state = store.getState();
  console.log(state.filters);
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(gasBill);
store.dispatch(waterBill);
store.dispatch(powerBill);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


let root = document.getElementById('app');
ReactDOM.render(jsx , root);

// const Layout = (props) =>{
//   return(
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//
//   );
// };
//
// const template = (
//   <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//   </div>
// );



// class OldSyntax{
//     constructor() {
//       this.name = 'Mike';
//
//     }
//     getGreeting(){
//       return `Hi. My name is ${this.name}`
//     }
//
//   }
//   const old = new OldSyntax();
//   console.log(old);
//   //---
// https://babeljs.io/docs/plugins/transform-class-properties/
//   class NewSyntax{
//     name = 'Jen';
//     greeting = () => {
//       return `Hi my name is ${this.name}`;
//     }
//
//   }
//
//   const newSyntax = new NewSyntax();
//   console.log(newSyntax);

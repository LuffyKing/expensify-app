import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';
const composeEnhancers = window.__READUX_DEVTOOLS_EXTENSION__COMPSE__||compose;
const configureStore = () =>{
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,


    }),
    composeEnhancers(applyMiddleware(thunk))

  );
  return store;
}
export default configureStore;

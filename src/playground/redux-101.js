import { createStore } from 'redux';
// ACtion generators are functions that return objects
//Reducers
// 1. Reducers are pure function
//2. Never chnage state or action

const incrementCount = ({incrementBy = 1} = {}) => {
  return{

    type: 'INCREMENT',
    incrementBy,
  };
};

const decrementCount = ({decrementBy = 1} = {}) => {
  return  {
    type:'DECREMENT',
    decrementBy
  };
};

const setCount = ({count} ) => {
  return {
    type:'SET',
    count
  };
};

const resetCount = () => {
  return {
    type:'RESET',
  };
};
//Reducer
// 1. Reducers are pure functions


const store = createStore((state = {count:0}, action) => {
  switch(action.type){
    case 'INCREMENT':

      return{
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return{
        count: state.count - action.decrementBy
      };
    case 'SET':
      return{
        count: action.count
      };
    case 'RESET':
      return{
        count:0
      };
    default:
      return state;
  }

});
console.log(store.getState());
//Actions - an object that gets sent to the store
//increment, decrement , reset
//I'd like to increment the count


const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(
  incrementCount({incrementBy: 99})
);

store.dispatch(
  decrementCount()
)

store.dispatch(
  decrementCount({decrementBy:150})
)
//I'd like to react the count to zero
store.dispatch(
  setCount({count:-190})
)



store.dispatch(
  resetCount()
)

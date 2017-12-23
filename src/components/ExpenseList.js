import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from '../components/ExpenseListItem';
import selectExpenses from '../selector/expenses';
export const ExpenseList = (props) =>{
  return(
    <div>

      {
        props.expenses.length === 0 ? (
          <p>No Expenses</p>
        ): props.expenses.map((expense, index)=>{
          index+=1;

          return(

            <ExpenseListItem {...expense} index={index} key={expense.id}></ExpenseListItem>
          )
        })
      }
    </div>
  );
};

const mapStateToProps  = (state) => {
  return {
     expenses: selectExpenses(state.expenses, state.filters)
  };
};


export default connect(mapStateToProps)(ExpenseList);

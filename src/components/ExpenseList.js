import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from '../components/ExpenseListItem';
import selectExpenses from '../selector/expenses';
export const ExpenseList = (props) =>{
  return(
    <div>
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {
          props.expenses.length === 0 ? (
            <div className="list-item list-item--message">No Expenses</div>
          ): props.expenses.map((expense, index)=>{
            index+=1;

            return(

              <ExpenseListItem {...expense} index={index} key={expense.id}></ExpenseListItem>
            )
          })
        }
      </div>

    </div>
  );
};

const mapStateToProps  = (state) => {
  return {
     expenses: selectExpenses(state.expenses, state.filters)
  };
};


export default connect(mapStateToProps)(ExpenseList);

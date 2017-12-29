import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selector/expenses';
import selectExpensesTotal from '../selector/expenses-total';
import numeral from 'numeral';

export class ExpenseSummary extends React.Component{
  expenseCountF = () => {
    const expText = this.props.expenseCount === 1 ? 'expense':'expenses';
    return `${this.props.expenseCount} ${expText}`;
  }
  expenseAmountF = () => {
    const amoResult = this.props.expenseTotal;
    return `${numeral(amoResult).format('$0,0.00')}`;
  }
  render(){
    return(
      <p>
        Viewing {this.expenseCountF()}  totalling {this.expenseAmountF()}
      </p>

    );
  }


}


const mapStateToProps  = (state) => {
  return {
     expenses: selectExpenses(state.expenses, state.filters),
     expenseCount:state.expenses.length,
     expenseTotal:selectExpensesTotal(state.expenses)

  };
};

// const ExpenseSummary = (props) =>{
//   return(
//     <p>Viewing {props.expenses.length} {props.expenses.length===1?'expense':'expenses'}  totalling {selectExpensesTotal(props.expenses)}</p>
//   )
// }
// const mapStateToProps  = (state) => {
//   return {
//      expenses: selectExpenses(state.expenses, state.filters)
//   };
// };

export default connect(mapStateToProps)(ExpenseSummary);

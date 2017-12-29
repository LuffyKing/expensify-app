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
      <h1>
        Viewing {this.expenseCountF()}  totalling {this.expenseAmountF()}
      </h1>

    );
  }


}


const mapStateToProps  = (state) => {
  const visExp = selectExpenses(state.expenses, state.filters);
  return {
     expenses:visExp,
     expenseCount:visExp.length,
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

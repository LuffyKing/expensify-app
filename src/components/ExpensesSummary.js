import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selector/expenses';
import selectExpensesTotal from '../selector/expenses-total';
import numeral from 'numeral';
export const ExpenseSummary=({expenseCount, expenseTotal})=>{
  const expText = expenseCount === 1 ? 'expense':'expenses';
  const expTextText = `${expenseCount} ${expText}`;
  const amoResult = expenseTotal;
  const amoResultText =  `${numeral(amoResult).format('$0,0.00')}`;
  return(
    <h1>
      Viewing {expTextText}  totalling {amoResultText}
    </h1>
  );
}

const mapStateToProps  = (state) => {
  const visExp = selectExpenses(state.expenses, state.filters);
  return {
     expenses:visExp,
     expenseCount:visExp.length,
     expenseTotal:selectExpensesTotal(visExp)

  };
};

export default connect(mapStateToProps)(ExpenseSummary);

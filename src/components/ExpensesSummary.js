import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import selectExpenses from '../selector/expenses';
import selectExpensesTotal from '../selector/expenses-total';
import numeral from 'numeral';
export const ExpenseSummary=({expenseCount, expenseTotal})=>{
  const expText = expenseCount === 1 ? 'expense':'expenses';
  const expTextText = `${expenseCount}`;
  const amoResult = expenseTotal;
  const amoResultText =  `${numeral(amoResult).format('$0,0.00')}`;
  return(
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expTextText}</span> {expText} totalling <span>{amoResultText}</span>
        </h1>
        <div className='page-header__actions'>
          <Link className='genButton' to="/create">Add expense</Link>
        </div>

      </div>
    </div>

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

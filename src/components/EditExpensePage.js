import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense,startRemoveExpense, startEditExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{
  onRemove= () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push('/');
  }
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  render(){
    return(
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1>Edit An Expense</h1>
          </div>

        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}></ExpenseForm>
          <button
            onClick={this.onRemove}
            className="genButton secondaryButton"
            >
          Remove Expense
        </button>
        </div>
      </div>
 
    );
  }


}

// const EditExpensePage = (props) => {
//   return (
    // <div>
    //   Editing expense with id of {props.match.params.id}
    //   <ExpenseForm expense={props.expense} onSubmit={(expense)=>{
    //     props.dispatch(editExpense(props.match.params.id, expense));
    //     props.history.push('/');
    //   }}></ExpenseForm>
    //   <button
    //     onClick={() => {
    //       console.log(props);
    //       let id = props.match.params.id;
    //       props.dispatch(removeExpense({id}));
    //       props.history.push('/');
    //    }
    // }>
    //   Remove
    // </button>
    //
    // </div>
//   )
// }

const mapDispatchToProps = (dispatch)=>{
  return {
    removeExpense:(id)=>{return dispatch(removeExpense({id}))},
    editExpense:(id, expense)=>dispatch(editExpense(id, expense)),
    startRemoveExpense:(id)=>{return dispatch(startRemoveExpense({id}))},
    startEditExpense:(id, updates)=>dispatch(startEditExpense(id, updates))
  };
};

const mapStateToProps = (state, props) => {
  return{
    expense:state.expenses.find((expense) => {
          return expense.id === props.match.params.id;
    })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

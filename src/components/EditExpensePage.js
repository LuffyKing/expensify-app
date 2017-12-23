import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{
  onRemove= () => {

    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/');
  }
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  render(){
    return(
      <div>

        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}></ExpenseForm>
        <button
          onClick={this.onRemove}
          >
        Remove
      </button>

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
    editExpense:(id, expense)=>dispatch(editExpense(id, expense))
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

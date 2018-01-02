import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
const now = moment();
class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      description: props.expense ? props.expense.description:'',
      note: props.expense ? props.expense.note:'',
      amount: props.expense ? props.expense.amount:'',
      createdAt: props.expense ? moment(props.expense.createdAt):moment(),
      calendarFocused:false,
      error:''

    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));

  };
  onTextAreaChange = (e) => {
    const note = e.target.value;
    this.setState(()=>({note}));

  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    const numTest = new RegExp(/^[1-9]\d*\.?\d{0,2}$/, 'i');
    if(numTest.test(amount)||!amount){
      this.setState(() => ({amount}));
    };


  };
  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(()=>({createdAt}));
    }
  };
  onFocusChange= ({focused}) =>{
    this.setState(() => ({calendarFocused: focused}));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description||!this.state.amount){
      const error='Please provide description and amount!';
      this.setState(() =>({error}));
    }
    else{
      const error='';
      this.setState(() =>({error}));
      this.props.onSubmit({
        description: this.state.description,
        amount: +this.state.amount,
        note:this.state.note,
        createdAt:this.state.createdAt.valueOf(),
        note:this.state.note,
      })
    }

  };
  render(){
    return(

        <form onSubmit={this.onSubmit} className='form'>
          {

            this.state.error&& <h3>Error!! {this.state.error}</h3>
          }
          <input
            type="text"
            autoFocus
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            className="text-input"
          />

          <input
            type="text"
            className="text-input"
            value={this.state.amount}
            onChange={this.onAmountChange}
            placeholder="Amount"/>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            >
          </SingleDatePicker>
          <textarea
            placeholder="Add a note for your expense (optional)"
            value = {this.state.note}
            onChange={this.onTextAreaChange}
            className="textarea"
            >

          </textarea>
          <div><button className="genButton">Save Expense</button></div>
        </form>
    );
  };
}
export default ExpenseForm;

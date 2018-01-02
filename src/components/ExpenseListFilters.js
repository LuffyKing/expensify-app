import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate} from '../actions/filters';
import {Link} from 'react-router-dom';
import {DateRangePicker} from 'react-dates';
import 'react-dates/initialize';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {

    switch (e.target.value) {
      case 'date':
        {
          this.props.sortByDate();
          break;

        }

      case 'amount':
        {
          this.props.sortByAmount();
          break;
        }
      default:
        {
          break;
        }

    }
 
  };

  render() {
    return (<div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input placeholder="Search Expenses" type="text" className="text-input" value={this.props.filters.text} onChange={this.onTextChange}/>
        </div>
        <div className="input-group__item">
          <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="input-group__item">
          <DateRangePicker startDate={this.props.filters.startDate} endDate={this.props.filters.endDate} onDatesChange={this.onDatesChange} focusedInput={this.state.calendarFocused} onFocusChange={this.onFocusChange} startDateId="start_date" endDateId="end_date" numberOfMonths={1} showClearDates={true} isOutsideRange={() => false}></DateRangePicker>
        </div>
      </div>

    </div>);

  };
}

// setup value and onChange for select

const mapDispatchToProps = (dispatch) => {
  return {
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (value) => dispatch(setTextFilter(value)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())
  };
};
const mapStateToProps = (state) => {
  return {filters: state.filters};
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

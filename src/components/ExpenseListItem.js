import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
export const ExpenseListItem = ({index, description, amount, createdAt, id}) => {
  return (
    <div>

      <Link className="list-item" to={`/edit/${id}`}>
        <div>
          <h3 className="list-item__title">{description}</h3>
          <span className="list-item__sub-title">{moment(createdAt).format('Do MMMM, YYYY')}</span>
        </div>
        <h3 className="list-item__data">
          {numeral(amount).format('$0,0.00')}
        </h3>
      </Link>
  </div>)
};

export default connect()(ExpenseListItem);

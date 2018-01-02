import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
/*
<input type="text" placeholder="Username" id="username"/>
<input type="text" placeholder="Password" id="password"/>
*/
export const LoginPage = ({startLogin}) =>{
  return(
    <div>
      <h1>Login to Expensify</h1>
      <button onClick={startLogin}>Login</button>
    </div>
  )
};
const mapDispatchToProps = (dispatch) => ({startLogin:()=> dispatch(startLogin())});
export default connect(undefined, mapDispatchToProps)(LoginPage);

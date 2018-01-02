import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
/*
<input type="text" placeholder="Username" id="username"/>
<input type="text" placeholder="Password" id="password"/>
*/
export const LoginPage = ({startLogin}) =>{
  return(
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className='box-layout__title'>Login to Expensify</h1>
        <p>it's time to get your expenses under control</p>
        <button onClick={startLogin} className="loginButton">Login with Google</button>

      </div>

    </div>
  )
};
const mapDispatchToProps = (dispatch) => ({startLogin:()=> dispatch(startLogin())});
export default connect(undefined, mapDispatchToProps)(LoginPage);

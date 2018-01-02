import React from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
import Header from '../components/Header';
export const PrivateRoute = ({
  isAuthenticated,
  component:Component,
  ...rest
}) => {
  return <Route {...rest} component={(props) => {
    return isAuthenticated?(
      <div>
        <Header></Header>
        <Component {...props}></Component>
      </div>

    ):(
      <Redirect to="/"/>
    )

  }}></Route>
};
const mapStateToProps = (state) => {
  return {isAuthenticated: !!state.auth.uid}
}

export default connect(mapStateToProps)(PrivateRoute);

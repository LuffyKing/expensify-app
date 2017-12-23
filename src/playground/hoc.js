//HOC - Higher order componenets
// Reuse Code
//Render hikacking
//prop manipulation
//Abstract State
import ReactDOM from 'react-dom';
import React from 'react';
const Info = (props) => {
  return(
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  )
};
const withAdminWarning = (WrappedComponent) => {
  return function(props){
    return(
    <div>

      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}></WrappedComponent>
    </div>);
  }

};


//const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    return(
    <div>
      {!props.isAuthenticated ? <p> This information requires you to be authenticated to view it.</p> : <WrappedComponent {...props}></WrappedComponent>}

    </div>
    );
  };
};
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details"></AuthInfo>, document.getElementById('app'));

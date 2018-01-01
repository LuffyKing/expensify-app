import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Comp404 from '../components/Comp404';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import {Router,Switch, Route} from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createHistory();
const AppRouter = () =>(
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true}></PublicRoute>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}></PrivateRoute>
        <PrivateRoute path="/create" component={AddExpensePage}></PrivateRoute>
        <PrivateRoute path="/edit/:id" component={EditExpensePage}></PrivateRoute>
        <Route component={Comp404} ></Route>
      </Switch>
    </div>
    </Router>

);
export default AppRouter;

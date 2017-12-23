import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Comp404 from '../components/Comp404';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage';
import Header from '../components/Header';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

const AppRouter = () =>(
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true}></Route>
        <Route path="/create" component={AddExpensePage}></Route>
        <Route path="/edit/:id" component={EditExpensePage}></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={Comp404} ></Route>
      </Switch>
    </div>
    </BrowserRouter>

);
export default AppRouter;

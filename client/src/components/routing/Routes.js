import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../expenses/Dashboard';
import EditExpense from '../expenses/EditExpense';
import AddExpense from '../expenses/AddExpense';
import ExpenseDetails from '../expenses/ExpenseDetails';
import NotFound from '../layout/NotFound';

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/edit/:id" component={EditExpense} />
        <Route exact path="/add" component={AddExpense} />
        <Route exact path="/:id" component={ExpenseDetails} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;

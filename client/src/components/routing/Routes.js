import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../dashboard/Dashboard';
import EditExpense from '../expenses/EditExpense';
import AddExpense from '../expenses/AddExpense';
import ExpenseDetails from '../expenses/ExpenseDetails';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/edit/:id" component={EditExpense} />
        <PrivateRoute exact path="/add" component={AddExpense} />
        <PrivateRoute exact path="/:id" component={ExpenseDetails} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;

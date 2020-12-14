import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import EditExpense from '../expenses/EditExpense';
import AddExpense from '../expenses/AddExpense';
import ExpenseDetails from '../expenses/ExpenseDetails';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
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

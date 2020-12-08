import React, { Fragment } from 'react';
import './components/fontawesome';
import { Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import Modal from './components/modals/Modal';
import history from './history';

import './scss/style.scss';

const App = () => (
  <Router history={history}>
    <Fragment>
      <Navbar />
      <Modal />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;

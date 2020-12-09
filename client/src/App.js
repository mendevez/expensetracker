import React, { Fragment } from 'react';
import './components/fontawesome';
import { Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import ModalManager from './components/modals/ModalManager';
import history from './history';

import './scss/style.scss';

const App = () => (
  <Router history={history}>
    <Fragment>
      <Navbar />
      <ModalManager />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;

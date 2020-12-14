import React, { Fragment, useEffect } from 'react';
import './components/fontawesome';
import { Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import ModalManager from './components/modals/ModalManager';
import setAuthenticationToken from './utils/setAuthToken';
import history from './history';
import './scss/style.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/authActions';


const App = () => {
  useEffect(() => {
    setAuthenticationToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
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
    </Provider>
  );
};
export default App;

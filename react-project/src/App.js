/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';
import store from './store';
import MainContainer from './containers/MainContainer';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route component={MainContainer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

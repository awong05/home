import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route render={() => <h2>Whoops!</h2>} />
        </Switch>
      </main>
    );
  }
}

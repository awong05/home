import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' render={() => <div>Simple Test</div>} />
        <Route path='/about' render={() => <div>About Div</div>} />
      </Switch>
    </main>
  )
};

export default Main;

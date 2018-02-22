import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import '../../css/components/app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

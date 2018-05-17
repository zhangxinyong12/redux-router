import React, { Component } from 'react';

import './App.css';
import Nav from '../components/nav/nav';
import Routers from '../router/router';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routers />
        <Nav />
      </div>
    );
  }
}

export default App;

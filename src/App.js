import React, { Component } from 'react';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import './App.css';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Layout />
      </div>
    );
  }
}

export default App;

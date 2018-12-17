import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Redirect, Route, Switch } from 'react-router-dom';
import PhoneListContainer from './containers/PhoneListContainer/PhoneListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={PhoneListContainer} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

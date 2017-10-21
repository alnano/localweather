import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Header = require('./components/Header')
const Forcast = require('./components/Forcast')

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
        <Header />
        <Switch>
          <Route path='/forcast' component={Forcast} />

        </Switch>
        </div>
     </Router>
    )
  }
}

export default App;

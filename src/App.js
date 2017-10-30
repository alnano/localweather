import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Header = require('./components/Header')
const Forcast = require('./components/Forcast')
const Details = require('./components/Details')


class App extends Component {
  render() {
    return (
      <Router>
        <div className='container-1'>
        <Header />
        <Switch >
          <Route path='/forcast' component={Forcast} />
          <Route path='/details' component={Details} />
        </Switch>
        </div>
     </Router>
    )
  }
}

export default App;

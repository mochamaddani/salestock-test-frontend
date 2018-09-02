import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/navigation/navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

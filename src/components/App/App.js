import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home/Home';
import Favourites from '../Favourites/Favourites';

import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/favourites" component={Favourites} />
      </>
    );
  }
}

export default App;

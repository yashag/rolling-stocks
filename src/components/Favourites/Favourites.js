import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FavouritesList from '../FavouritesList/FavouritesList';

import './Favourites.scss';

class Favourites extends Component {
  
  render() {
    return (
      <section className="rs-favourites">
        <Header />

        <section id='rs-favourites-details'>
          <h3>List of your favourite stocks</h3>
          <FavouritesList />
        </section>

        <Footer />
      </section>
    );
  }
}

export default Favourites;

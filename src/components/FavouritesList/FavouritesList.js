import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import posed, { PoseGroup } from 'react-pose';

import { getFavouriteStocks, setFavouriteStocks } from '../../utils/storage';

import './FavouritesList.scss';

const Item = posed.li({
  enter: { 
    scaleY: 1,
    opacity: 1,
  },
  exit: { 
    scaleY: 0,
    opacity: 0,
    transition: { duration: 200 }
  }
})

class FavouritesList extends Component {

  state = { favouriteStocks: [] }

  constructor(props) {
    super(props);

    this.loadFavourites = this.loadFavourites.bind(this);
    this.removeFromFavourites = this.removeFromFavourites.bind(this);
  }

  componentDidMount() {
    this.loadFavourites(getFavouriteStocks());
  }

  loadFavourites(favourites) {
    this.setState({
      favouriteStocks: Object.values(favourites)
    });
  }

  removeFromFavourites(stockSymbol) {
    const currentFavouriteStocks = getFavouriteStocks();
    const { [stockSymbol]: stockToDelete, ...rest } = currentFavouriteStocks;
    setFavouriteStocks(rest);

    this.loadFavourites(rest);
  }

  render() {
    return (
      <div id="rs-favourites-list-container">
        <ul id="rs-favourites-list">
          <PoseGroup>
            {this.state.favouriteStocks.map(stock => (
              <Item key={stock.symbol} className="rs-favourites-list-item">
                <span className="rs-favourites-list-item-name">{stock.symbol}</span>
                <button className="rs-favourites-list-item-action" onClick={() => this.removeFromFavourites(stock.symbol)}><FaTimes /> <span>Remove from favourites</span></button>
              </Item>
            ))}
          </PoseGroup>
        </ul>
      </div>
    );
  }
}

export default FavouritesList;

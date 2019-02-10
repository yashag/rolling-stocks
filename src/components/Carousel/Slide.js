import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaCheck } from 'react-icons/fa';
import posed from 'react-pose';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import { getFavouriteStocks, setFavouriteStocks } from '../../utils/storage';

import './Slide.scss';

const SlideDiv = posed.div({
    visible: {
        opacity: 1,
        width: '100%'
    },
    hidden: {
        opacity: 0,
        width: 0
    }
})

class Slide extends Component {

    state = { favourite: false };

    constructor(props) {
        super(props);

        this.addToFavourites = this.addToFavourites.bind(this);
    }

    componentDidMount() {
        const currentFavouriteStocks = getFavouriteStocks();

        if (currentFavouriteStocks[this.props.stock.symbol]) {
            this.setState({ favourite: true });
        }
    }

    addToFavourites(stock) {
        const currentFavouriteStocks = getFavouriteStocks();
        currentFavouriteStocks[stock.symbol] = stock;
        setFavouriteStocks(currentFavouriteStocks);
        this.setState({ favourite: true });
    }

    render() {
        const { stock, active } = this.props;

        const stockData = [
            { time: "Previous closing", value: stock.previousClose },
            { time: "Today's opening", value: stock.open },
            { time: "Today's low", value: stock.low },
            { time: "Today's high", value: stock.high },
            { time: "Today's closing", value: stock.close }
        ];

        return (
            <SlideDiv className="rs-slide" pose={active ? 'visible' : 'hidden'} >
                <div className='rs-slide-data-table'>
                    <span className="rs-slide-stock-category">Symbol:</span><span className="rs-slide-stock-value">{stock.symbol}</span>
                    <span className="rs-slide-stock-category">Company:</span><span className="rs-slide-stock-value">{stock.companyName}</span>
                    <span className="rs-slide-stock-category">Primary exchange:</span><span className="rs-slide-stock-value">{stock.primaryExchange}</span>
                    <span className="rs-slide-stock-category">Sector:</span><span className="rs-slide-stock-value">{stock.sector}</span>
                </div>

                <div className="rs-slide-data-chart">
                    <BarChart width={680} height={300} data={stockData}>
                        <XAxis dataKey="time" stroke="#f3f3f3" />
                        <YAxis tick={{ wordBreak: 'break-word' }} stroke="#f3f3f3" />
                        <Tooltip cursor={{ fill: 'rgb(158, 170, 198' }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar type="monotone" dataKey="value" stroke="#b1afe2" barSize={30} fill="#8884d8" />
                    </BarChart>
                </div>

                <div className="rs-slide-favourites">
                    <button className={`rs-slide-favourites-add ${this.state.favourite ? 'rs-slide-favourites-added' : ''}`} onClick={() => {
                        if (!this.state.favourite) this.addToFavourites(stock)
                    }}>
                        {
                            this.state.favourite ?
                                <>
                                    <FaCheck /> <span>Already in favourites</span>
                                </>
                                :
                                <>
                                    <FaPlus /> <span>Add to favourites</span>
                                </>
                        }
                    </button>
                </div>
            </SlideDiv >
        );
    }
}

Slide.propTypes = {
    stock: PropTypes.object.isRequired,
    active: PropTypes.bool
}

export default Slide;

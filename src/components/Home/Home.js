import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Carousel from '../Carousel/Carousel';

import './Home.scss';

const sampleData = require('../../sample-data.json');

class Home extends Component {
    state = { marketData: [] }

    componentDidMount() {
        axios.get(`https://api.iextrading.com/1.0/stock/market/list/mostactive`).then(({ data }) => {
            if(!data.length) data = sampleData;
            this.setState({ marketData: data });
        }).catch(error => {
            console.error('Retrieving the stock price failed. Details: ', error);
        });
    }

    render() {
        return (
            <section className="rs-home">
                <Header />

                <section id='rs-home-mostactive'>
                    <h3>List of top 10 gainers ({new Date().toLocaleDateString()})</h3>
                    <Carousel data={this.state.marketData} id='rs-home-mostactive-carousel' />
                </section>

                <Footer />
            </section>
        );
    }
}

export default Home;

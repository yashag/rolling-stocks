import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Slide from './Slide';

import './Carousel.scss';

class Carousel extends Component {

    state = { currentSlide: 0 };

    constructor(props) {
        super(props);

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.renderSlides = this.renderSlides.bind(this);
    }

    nextSlide() {
        const newSlideIndex = (this.state.currentSlide + 1) % this.props.data.length;
        this.setState({ currentSlide: newSlideIndex });
    }

    prevSlide() {
        const newSlideIndex = (this.state.currentSlide + this.props.data.length - 1) % this.props.data.length;
        this.setState({ currentSlide: newSlideIndex });
    }

    renderSlides() {
        return this.props.data.map((stock, index) =>
            <Slide key={stock.symbol} stock={stock} active={this.state.currentSlide === index} />
        );
    }


    render() {

        return (
            <div className="rs-carousel">

                <button className="rs-carousel-arrow" onClick={this.prevSlide}>
                    <FaChevronLeft className='rs-carousel-arrow-icon' />
                </button>

                <div className="rs-slides-wrapper">
                    {this.renderSlides()}
                </div>

                <button className="rs-carousel-arrow" onClick={this.nextSlide}>
                    <FaChevronRight className='rs-carousel-arrow-icon' />
                </button>
            </div>
        );
    }
}

Carousel.propTypes = {
    data: PropTypes.array.isRequired
}

export default Carousel;

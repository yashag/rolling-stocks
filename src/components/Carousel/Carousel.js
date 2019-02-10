import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Slide from './Slide';
import Dot from './Dot';

import './Carousel.scss';

class Carousel extends Component {

    state = { currentSlide: 0 };

    constructor(props) {
        super(props);

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.goToSlide = this.goToSlide.bind(this);
        this.renderSlides = this.renderSlides.bind(this);
        this.renderDotsNavigation = this.renderDotsNavigation.bind(this);
    }

    nextSlide() {
        const newSlideIndex = (this.state.currentSlide + 1) % this.props.data.length;
        this.setState({ currentSlide: newSlideIndex });
    }

    prevSlide() {
        const newSlideIndex = (this.state.currentSlide + this.props.data.length - 1) % this.props.data.length;
        this.setState({ currentSlide: newSlideIndex });
    }

    goToSlide(slideIndex) {
        this.setState({ currentSlide: slideIndex });
    }

    renderSlides() {
        return this.props.data.map((stock, index) =>
            <Slide key={stock.symbol} stock={stock} active={this.state.currentSlide === index} />
        );
    }

    renderDotsNavigation() {
        return this.props.data.map((stock, index) =>
            <Dot key={stock.symbol} active={this.state.currentSlide === index} onClick={() => this.goToSlide(index)} />
        );
    }

    render() {

        return (
            <div className="rs-carousel">

                <div className="rs-carousel-main-slider">

                    <div className="rs-slides-wrapper">
                        {this.renderSlides()}
                    </div>

                    <div className="rs-carousel-arrows-navigation">
                        <button className="rs-carousel-arrow rs-carousel-left-arrow" onClick={this.prevSlide}>
                            <FaChevronLeft className='rs-carousel-arrow-icon' />
                        </button>
                        <button className="rs-carousel-arrow rs-carousel-right-arrow" onClick={this.nextSlide}>
                            <FaChevronRight className='rs-carousel-arrow-icon' />
                        </button>
                    </div>

                </div>

                <div className="rs-carousel-dots-navigation">
                    {this.renderDotsNavigation()}
                </div>
            </div>
        );
    }
}

Carousel.propTypes = {
    data: PropTypes.array.isRequired
}

export default Carousel;

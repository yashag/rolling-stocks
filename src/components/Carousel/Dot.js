import React from 'react';
import PropTypes from 'prop-types';

import './Dot.scss';

const Dot = ({ active, onClick }) => (
    <div className={`rs-slides-dot ${active ? 'rs-slides-dot-active' : ''}`} onClick={onClick}></div>
)

Dot.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func
}

export default Dot;
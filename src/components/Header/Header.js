import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaList } from 'react-icons/fa';

import logo from '../../assets/logo.svg';
import './Header.scss';

const Header = (props) => (
    <header className="rs-header">
        <div className="rs-header-main">
            <img src={logo} className="rs-header-logo" alt="logo" />
            <Link to="/" className="rs-header-navigation-link"><h1 className="rs-header-title">Rolling Stocks</h1></Link>
        </div>
        <div className="rs-header-navigation">
            <Link to="/" className="rs-header-navigation-link"><FaHome /> <span>Home</span></Link>
            <Link to="/favourites" className="rs-header-navigation-link"><FaList/> <span>Favourites</span></Link>
        </div>
    </header>
)

export default Header;
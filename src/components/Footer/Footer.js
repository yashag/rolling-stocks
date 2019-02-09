import React from 'react';

import './Footer.scss';

const Footer = (props) => (
    <footer id='rs-footer'>
        <div id="disclaimer">
            <p>Disclaimer: This is a programming exercise. The financial data presented here shouldn't be addressed as an accurate information</p>
        </div>
        <div id='rs-home-attributions'>
            <p>Data provided for free by <a href="https://iextrading.com/developer/" >IEX</a>. View <a href="https://iextrading.com/api-exhibit-a/">IEX’s Terms of Use</a>.</p>
        </div>
    </footer>
)

export default Footer;
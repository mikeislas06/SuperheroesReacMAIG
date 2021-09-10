import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import "../styles/Header.styles.css"

const Header = props => {
    return (
        <header>
            <Link to="/">Super Heroes API</Link>
        </header>
    );
};

export default Header;
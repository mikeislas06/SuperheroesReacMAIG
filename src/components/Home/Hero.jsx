import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import "../../styles/Home/Hero.styles.css"

const Hero = ({ name, avatar, id }) => {
    return (
        <div className="hero-card-home">
            <h2>{name}</h2>
            <img src={avatar} alt={name} />
            <div className="hero-card-home__actions">
                <Link to={`/hero/${id}`} className="more-btn">Show more</Link>
            </div>
        </div>
    );
};

export default Hero;
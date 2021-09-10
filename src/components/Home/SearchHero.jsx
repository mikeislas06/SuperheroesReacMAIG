import React from 'react';

//Styles
import "../../styles/Home/SearchHero.styles.css"

const SearchHero = ({ setHeroName, handleSearchHero }) => {
    return (
        <form action="" onSubmit={handleSearchHero}>
            <h2>Search a hero by name</h2>
            <input type="text" onChange={(e) => {setHeroName(e.target.value)}} placeholder="Batman, Ironman..." />
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchHero;
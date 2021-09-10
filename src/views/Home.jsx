import React, { useState } from 'react';

//Components
import SearchHero from '../components/Home/SearchHero';
import Hero from '../components/Home/Hero';
import ShowError from '../components/ShowError';

const Home = () => {

    const [heroName, setHeroName] = useState(null);
    const [heroData, setHeroData] = useState(null);
    const [error, setError] = useState(false);
    const [message, setmessage] = useState(null);

    const handleSearchHero = async (e) => {
        
        const accessToken = "4712981568713235";
        const url = `https://superheroapi.com/api.php/${accessToken}/search/${heroName}`;
        e.preventDefault();

        try {

            const response = await fetch(url);
            const result = await response.json();
            
            if(result.response === "error"){
                setError(true);
                setmessage(result.error);
            }
            else{
                setError(false);
                setHeroData(result.results[0])
            }
            
            console.log(result);
        
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <SearchHero setHeroName={setHeroName} handleSearchHero={handleSearchHero} />

            {
                //Si la variable error es true
                error ? (
                    <ShowError message={message} />
                ) : (
                    heroData && (
                    <Hero
                        name={heroData.name}
                        avatar={heroData.image.url}
                        id={heroData.id}
                    />
                    )
                )
            }
        </>
    );
};

export default Home;
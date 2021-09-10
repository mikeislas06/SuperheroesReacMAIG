import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

//Styles
import "../styles/SingleHero.styles.css"

const SingleHero = () => {

    const { id } = useParams();

    const [singleData, setSingleData] = useState(null);

    const handleSingleFecthAPI = async () => {
        try {
            const accessToken = "4712981568713235";
            const url = `https://www.superheroapi.com/api.php/${accessToken}/${id}`;

            const response = await fetch(url);
            const result = await response.json();
            setSingleData(result);
            // console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleSingleFecthAPI();
    }, []);

    const colorSpan = (int) => {
        let color = "";
        const intParsed = parseInt(int);

        if(intParsed < 45) color = "red";
        else if(intParsed < 70) color = "yellow";
        else color= "green";

        console.log(color);
        return color;
    }

    return (
        singleData && (
            <>
            <div className="hero-card" style={{marginBottom:"50px"}}>
                <div className="hero-card__image">
                    <img src={singleData.image.url} alt={singleData.image.url} />
                </div>

                <div className="hero-card__information">
                    <p><span className="stat">Name:</span> {singleData.name}</p>
                    <p><span className="stat">Alignment:</span> {singleData.biography.alignment}</p>
                    <p><span className="stat">Relatives:</span> {singleData.connections.relatives}</p>
                    <h3>Stats</h3>
                    <p><span className="stat">Power:</span> <span className={colorSpan(singleData.powerstats.power)}>{singleData.powerstats.power}</span> / 100</p>
                    <p><span className="stat">Intelligence:</span> <span className={colorSpan(singleData.powerstats.intelligence)}>{singleData.powerstats.intelligence}</span> / 100</p>
                    <p><span className="stat">Speed:</span> <span className={colorSpan(singleData.powerstats.speed)}>{singleData.powerstats.speed}</span> / 100</p>
                    <p><span className="stat">Strength:</span> <span className={colorSpan(singleData.powerstats.strength)}>{singleData.powerstats.strength}</span> / 100</p>
                </div>
            </div>
            <Link to="/" className="go-back-btn">Go back</Link>
            </>
        )
    );
};

export default SingleHero;
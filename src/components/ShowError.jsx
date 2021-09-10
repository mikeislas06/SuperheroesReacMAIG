import React from 'react';

//Styles
import "../styles/Global.styles.css"

const ShowError = ({ message }) => {
    return (
        <div className="error-alert">
            <h2>Error!</h2>
            <p>{message}</p>
        </div>
    );
};

export default ShowError;
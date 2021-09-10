import React from 'react';

const NotFound = props => {
    return (
        <div style={{height: "100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <h2 style={{fontSize:"6rem", color:"#cd113b"}}>404</h2>
            <p style={{fontSize:"3rem"}}>Not Found</p>
        </div>
    );
};

export default NotFound;
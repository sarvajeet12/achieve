import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", rowGap: "3rem" }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p style={{fontSize:"1.3rem"}}>Sorry, the page you are looking for does not exist.</p>
            <Link to="/"><button style={{ padding: ".5rem", cursor: "pointer" }}>Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;
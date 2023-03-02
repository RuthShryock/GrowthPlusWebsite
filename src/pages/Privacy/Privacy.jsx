import Helmet from "react-helmet";
import React from 'react';
import './Privacy.css';
import Navbar from "../../components/Navbar";

const Privacy = () => {
    return (
        <div className="privacy">
            <Helmet bodyAttributes={{style: 'background-color : var(--color-orange)'}}/>
            <Navbar></Navbar>
        </div>   
    )
};

export default Privacy;
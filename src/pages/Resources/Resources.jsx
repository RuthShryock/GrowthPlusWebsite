import Helmet from "react-helmet";
import React from 'react';
import './Resources.css';
import Navbar from "../../components/Navbar";

const Resources = () => {
    return (
        <div className="resources">
            <Helmet bodyAttributes={{style: 'background-color : var(--color-blue)'}}/>
            <Navbar></Navbar>
        </div>   
    )
};

export default Resources;
import Helmet from "react-helmet";
import React from 'react';
import './Team.css';
import Navbar from "../../components/Navbar";

const Team = () => {
    return (
        <div className="team">
        <Helmet bodyAttributes={{style: 'background-color : var(--color-light-green)'}}/>
            <Navbar></Navbar>
        </div>   
    )
};

export default Team;
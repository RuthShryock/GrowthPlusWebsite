import Helmet from "react-helmet";
import React from 'react';
import './About.css';
import Navbar from "../../components/Navbar";

const About = () => {
    return (
        <div classname="about">
            <Helmet bodyAttributes={{style: 'background-color : var(--color-yellow)'}}/>
            <Navbar></Navbar>
        </div>   
    )
};

export default About;
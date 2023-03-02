import Helmet from "react-helmet";
import React from 'react';
import './Home.css';
import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <div className="home">
            <Helmet bodyAttributes={{style: 'background-color : var(--color-dark-green)'}}/>
            <Navbar></Navbar>
            <div className="home-body">
                <div className="grid-container">
                    <div className="grid-child"><img src="/elephant.png" alt="elephant"></img></div>
                    <div className="grid-child">+</div>
                    <div className="grid-child"><img src="/elephant.png" alt="elephant"></img></div>
                    <div className="grid-child">=</div>
                    <div className="grid-child" id="hide"><img src="/elephant.png" alt="elephant"></img></div>
                    <div className="grid-child" id="hide"><img src="/elephant.png" alt="elephant"></img></div>
                    <div className="grid-nested">
                        <div className="grid-child"><img src="/elephant.png" alt="elephant"></img></div>
                        <div className="grid-child"><img src="/elephant.png" alt="elephant"></img></div>
                    </div>
                </div>
            </div>
        </div>   
    )
};

export default Home;
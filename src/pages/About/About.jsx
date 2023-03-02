import Helmet from "react-helmet";
import React from 'react';
import './About.css';
import Navbar from "../../components/Navbar";

const About = () => {
    return (
        <div classname="about">
            <Helmet bodyAttributes={{style: 'background-color : var(--color-yellow)'}}/>
            <Navbar></Navbar>
            <div className="about-body">
                <h2>About</h2>
                <p>Millions of children across Africa struggle with basic math. Yet they have increasing access to smartphones at home. Our vision is to tackle this
                need through a mobile application that empowers parents to provide their children with fundamental math skills. Our project, Growth+, is a mobile app 
                designed to target numeracy, the ability to understand and use fundamental math skills, in Africa. While a couple educational apps have been developed 
                in East Africa, our app will be the first to primarily target numeracy in Central and West Africa.</p>
                <p>Designed specifically for areas with little to no internet, our application works fully offline and uses limited storage on smartphones. Additionally,
                our app functions in three main languages: French, English, and Chadian Arabic, with options to add more local languages. Our vision is a better future 
                for African children through improved math skills, and this starts with parents and their children using Growth+.</p>
                <h2>Growth+ is designed</h2>
                <div className="grid-about">
                    <div className="grid-child-about">
                        <div className="grid-linear">
                            <h3>for parents</h3>
                        </div>
                        <div className="grid-parent">
                            <div className="grid-parent-pic"><img src="/parentOne.png" alt="parent portal"></img></div>
                            <div className="grid-parent-pic"><img src="/parentTwo.png" alt="parent portal"></img></div>
                        </div>
                        <div className="grid-linear" id="small">
                            <h3>our parent portal provides reports on each child's progress as well as subjects in which they are exceling and struggling </h3>
                        </div>
                    </div>
                    <div className="grid-child-about">
                        <div className="grid-linear">
                            <h3>for children</h3>
                        </div>
                        <div className="grid-parent" id="child">
                            <div className="grid-parent-pic"><img src="/childOne.png" alt="parent portal"></img></div>
                            <div className="grid-parent-pic"><img src="/childTwo.png" alt="parent portal"></img></div>
                            <div className="grid-parent-pic"><img src="/childThree.png" alt="parent portal"></img></div>
                        </div>
                        <div className="grid-linear" id="small">
                            <h3>our main application allows for children to follow roadmaps, learn math skills while playing games, and compare scores with other players</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
};

export default About;
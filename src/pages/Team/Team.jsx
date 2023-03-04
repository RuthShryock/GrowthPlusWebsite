import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import Helmet from "react-helmet";
import React from 'react';
import './Team.css';
import Navbar from "../../components/Navbar";

const Team = () => {
    return (
        <div className="Meet the Developers">
        <Helmet bodyAttributes={{style: 'background-color : var(--color-light-green)'}}/>
            <Navbar></Navbar>
            <div className="team-body">
                <h2>Team</h2>
                <div className="team-grid-one">
                    <div className="team-child" id="ruth">
                       <img src="/ruth.jpg" alt="profile pic"></img>
                       <h2 id="ruth">Ruth Shryock</h2>
                       <h3 id="ruth">project manager</h3>
                       <div className="links">
                            <a href='https://github.com/RuthShryock' target="_blank" rel="noreferrer" id="ruth"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href='https://www.linkedin.com/in/ruth-shryock/' target="_blank" rel="noreferrer" id="ruth"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                       </div>
                    </div>
                    <div className="team-child" id="victor">
                        <img src="/victor.jpg" alt="profile pic"></img>
                        <h2 id="victor">Victor Yue</h2>
                        <h3 id="victor">frontend developer</h3>
                        <div className="links">
                            <a href='https://github.com/VictorYue'target="_blank" rel="noreferrer" id="victor"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href='https://www.linkedin.com/in/victor-yue-269021134/' target="_blank" rel="noreferrer" id="victor"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                       </div>
                    </div>
                </div>
                <div className="team-grid-two">
                    <div className="team-child" id="julio">
                        <img src="/julio.png" alt="profile pic"></img>
                        <h2 id="julio">Julio Alva</h2>
                        <h3 id="julio">backend developer</h3>
                        <div className="links">
                            <a href='https://github.com/JulioC-19' target="_blank" rel="noreferrer" id="julio"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href='https://www.linkedin.com/in/julio-alva/' target="_blank" rel="noreferrer" id="julio"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                       </div>
                    </div>
                    <div className="team-child" id="leticia">
                        <img src="/leticia.jpg" alt="profile pic"></img>
                        <h2 id="leticia">Leticia Barbosa</h2>
                        <h3 id="leticia">backend developer</h3>
                        <div className="links">
                            <a href='https://github.com/leticiavrbarbosa' target="_blank" rel="noreferrer" id="leticia"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href='https://www.linkedin.com/in/leticia-barbosa-ab2771211/' target="_blank" rel="noreferrer" id="leticia"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                       </div>
                    </div>
                    <div className="team-child" id="mack">
                        <img src="/mack.png" alt="profile pic"></img>
                        <h2 id="mack">Mack Orooji</h2>
                        <h3 id="mack">backend developer</h3>
                        <div className="links">
                            <a href='https://github.com/mackorooji8' target="_blank" rel="noreferrer" id="mack"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href='https://www.linkedin.com/in/mack-orooji-b8b148191/' target="_blank" rel="noreferrer" id="mack"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                       </div>
                    </div>
                </div>
            </div>
        </div>   
    )
};

export default Team;
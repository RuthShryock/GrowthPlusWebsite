import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import Helmet from "react-helmet";
import React from 'react';
import './Resources.css';
import Navbar from "../../components/Navbar";

const Resources = () => {
    return (
        <div className="resources">
            <Helmet bodyAttributes={{style: 'background-color : var(--color-blue)'}}/>
            <Navbar></Navbar>
            <div className="resources-body">
                <div className='topHeader'>Resources</div>
                <div className="grid-container-resources">
                    <div className="grid-child-resources" id='buttonOne'><a href='mailto:contactarroseplus@gmail.com' target="_blank" rel="noreferrer"><button className="iconBtn"><FontAwesomeIcon icon={faEnvelope}/></button></a></div>
                    <div className="grid-child-resources" id='buttonTwo'><a href="https://github.com/ucfcs/GrowthPlus" target="_blank" rel="noreferrer"><button className="iconBtn"><FontAwesomeIcon icon={faGithub}/></button></a></div>
                    <div className="grid-child-resources" id='buttonThree'><a href='https://play.google.com/store/apps/details?id=com.GrowthPlus&pli=1' target="_blank" rel="noreferrer"><button className="iconBtn"><FontAwesomeIcon icon={faGooglePlay}/></button></a></div>
                    <div className="grid-child-resources" id='buttonFour'><a href='https://youtu.be/X1B1j9lDhl8?si=3A8vcgy3_7DcaSuh' target="_blank" rel="noreferrer"><button className="iconBtn"><FontAwesomeIcon icon={faYoutube}/></button></a></div>
                    <div className="grid-child-resources" id='textOne'><h3>contact us at:<br/>contactarroseplus@<br/>gmail.com</h3></div>
                    <div className="grid-child-resources" id='textTwo'><h3>check out our code</h3></div>
                    <div className="grid-child-resources" id='textThree'><h3>download the app</h3></div>
                    <div className="grid-child-resources" id='textFour'><h3>video tutorial</h3></div>
                </div>
            </div>
        </div>   
    )
};

export default Resources;
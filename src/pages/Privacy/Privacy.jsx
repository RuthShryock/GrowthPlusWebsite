import Helmet from "react-helmet";
import React from 'react';
import './Privacy.css';
import Navbar from "../../components/Navbar";

const Privacy = () => {
    return (
        <div className="privacy">
            <Helmet bodyAttributes={{style: 'background-color : var(--color-orange)'}}/>
            <Navbar></Navbar>
            <div className="privacy-body">
                <h2>Privacy</h2>
                <p>Protecting your private information is our priority. This Statement of Privacy applies to Growth+, and Growth+ and governs data collection and usage.
                For the purposes of this Privacy Policy, unless otherwise noted, all references to Growth+ include https://arroseplus.netlify.app and the Growth+ mobile
                application. The Growth+ application is a education application. By using the Growth+ application, you consent to the data practices described in this 
                statement.</p>
                <h1>Collection of your Personal Information</h1>
                <p>We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal
                information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest
                sponsored by us or one of our partners; (c) or sending us an email message. To wit, we will use your information for, but not limited to, communicating with 
                you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.</p>
                <h1>Sharing Information with Third Parties</h1>
                <p>Growth+ does not sell, rent or lease its customer lists to third parties.</p>
                <p>Growth+ may share data with trusted partners to help perform statistical analysis, send you email or postal mail, or provide customer support. All such third
                parties are prohibited from using your personal information except to provide these services to Growth+, and they are required to maintain the confidentiality of
                your information</p>
                <p>Growth+ may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to:
                (a) conform to the edicts of the law or comply with legal process served on Growth+ or the site; (b) protect and defend the rights or property of Growth+; 
                and/or (c) act under exigent circumstances to protect the personal safety of users of Growth+, or the public.</p>
                <h1>Right to Deletion</h1>
                <p>Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:</p>
                <u1>
                    <li>Delete your personal information from our records; and</li>
                    <li>Direct any service providers to delete your personal information from their records.</li>
                </u1>
                <p>Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:</p>
                <u1>
                    <li>Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance
                    with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or 
                    otherwise perform a contract between you and us;</li>
                    <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;</li>
                    <li>Debug to identify and repair errors that impair existing intended functionality;</li>
                    <li>Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;</li>
                    <li>Comply with the California Electronic Communications Privacy Act;</li>
                    <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and 
                    privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained
                    your informed consent;</li>
                    <li>Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;</li>
                    <li> Comply with an existing legal obligation; or</li>
                    <li>Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.</li>
                </u1>
                <h1>Children Under Thirteen</h1>
                <p>Growth+ does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or
                guardian for permission to use this application.</p>
                <h1>Changes to this Statement</h1>
                <p>Growth+ reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending 
                a notice to the primary email address specified in your account, by placing a prominent notice on our application, and/or by updating any privacy information. Your continued 
                use of the application and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide 
                and be bound by that Policy.</p>
                <h1>Contact Information</h1>
                <p>Growth+ welcomes your questions or comments regarding this Statement of Privacy. If you believe that Growth+ has not adhered to this Statement, please contact Growth+ at:</p>
                <p id="contactInfo">Growth+<br/>7746 Lower Gateway Loop Unit 1626<br/>Orlando, Florida 32827</p>
                <p id="contactInfo">Email Address:<br/>arroseplus@gmail.com</p>
                <p id="contactInfo">Telephone number:<br/>(661) 383-7660</p>
                <p id="privacyCenter">Effective as of March 13, 2023</p>
            </div>
        </div>   
    )
};

export default Privacy;
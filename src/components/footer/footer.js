import React from "react";
import "./footer.css";
import { SocialIcon } from 'react-social-icons';
import {Navbar} from "react-bootstrap";

function Footer(){
    return(
            <Navbar className="footer" dark>
                <SocialIcon url="https://www.linkedin.com/in/rebecca-berger-howe/" bgColor="#4BC3B5"/>
                <SocialIcon url="https://twitter.com/howe_becca" bgColor="#4BC3B5"/>
                <SocialIcon url="https://www.facebook.com/Rhowe16" bgColor="#4BC3B5"/>
                <SocialIcon url="https://github.com/rhowe20" bgColor="#4BC3B5"/>
            </Navbar>
    )
}

export default Footer;
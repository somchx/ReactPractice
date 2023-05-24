import React from 'react'
import './CallToAction.css'
import { FiCode } from 'react-icons/fi'
import { BsGithub,BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function CallToAction() {
    return (
        <div className="cta-bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-text">
                    <FiCode className="FiCode" />
                    <h2>Somchange's Portfolio</h2>
                    <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                    <div className="contact">
                        <a href="https://github.com/somchx"><BsGithub /></a>
                        
                        <a href="mailto: somchangechananya@gmail.com"><SiGmail /></a>
                        <a href="https://www.facebook.com/ssomchange18/"><BsFacebook /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
//rfce
import React, { useState } from 'react'
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import './Header.css'
export default function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const CloseMobileMenu = () => setClick(!click)
    return (
        <div className='header'>
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="/">Somchx <FiCode/></a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={CloseMobileMenu}>
                            <a href="#About">About</a>
                        </li>
                        <li className="menu-link" onClick={CloseMobileMenu}>
                            <a href="#Content">Projects</a>
                        </li>
                        <li className="menu-link" onClick={CloseMobileMenu}>
                            <a href="#Skill">Skill</a>
                        </li>
                        <li className="menu-link" onClick={CloseMobileMenu}>
                            <a href="#Education">Education</a>
                        </li>
                        <li className="menu-link" onClick={CloseMobileMenu}>
                            <a href="#Footer">Contact</a>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? ( <FiX/>) : (<FiMenu />)}
                    </div>
                </div>
            </div>
        </div>

    )
}

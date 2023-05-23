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
                        <a href="/">ReactTest <FiCode/></a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={CloseMobileMenu}>
                            <a href="/about">About</a>
                        </li>
                        <li className="menu-link" onClick={CloseMobileMenu}>
                            <a href="/">Contact</a>
                        </li>
                        <li className="menu-link" onClick={CloseMobileMenu}>
                            <a href="/">Blog</a>
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

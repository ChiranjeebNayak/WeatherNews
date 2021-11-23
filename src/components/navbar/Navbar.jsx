import React from 'react'
import { useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
// import './nav.js'
function Navbar() {
    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        hamburger.addEventListener('click', () => {
            //Animate Links
            navLinks.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle("fade");
            });

            //Hamburger Animation
            hamburger.classList.toggle("toggle");
        });

    }, [])

    return (
        <>
            <nav>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="hamburger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className="nav-links">
                    <li><Link to='/home' style={{ textDecoration: 'none' }}>
                        Home
                    </Link></li>
                    
                    <li><Link to="/news" style={{ textDecoration: 'none' }}>
                        News
                    </Link></li>
                    <li><Link to="/contact" style={{ textDecoration: 'none' }}>
                        Contact
                    </Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar

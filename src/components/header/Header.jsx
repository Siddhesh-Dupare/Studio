import { NavLink } from "react-router-dom";

import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import './header.css'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen); 

        const getNavbar = document.querySelector(".navbar");
        const getSocialLinks = document.querySelector(".social-links");

        if (getNavbar.className === "navbar" && getSocialLinks.className === "social-links") {
            getNavbar.className += " responsive";
            getSocialLinks.className += " responsive";
        } else {
            getNavbar.className = "navbar";
            getSocialLinks.className = "social-links";
        }
    }

    return (
        <>
            <header>
                <div className="logo-container">
                    <NavLink to="/" className="logo">Studio Size</NavLink>
                </div>

                <nav className="navbar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/labs">Labs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>

                <div className="social-links">
                    <div className="column">
                        <a href="#">Instagram</a>
                        <a href="#">Vimeo</a>
                        <a href="#">Savee.it</a>

                        <a href="#">Behance</a>
                        <a href="#">Youtube</a>
                        <a href="#">Font in Use</a>

                        <a href="#">Dribble</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Pinterest</a>
                    </div>
                </div>

                <div className="menu-container">
                    <Hamburger flag={ menuOpen }  toggleMenu={ toggleMenu }/>
                </div>
            </header>
        </>
    );
}

function Hamburger({ toggleMenu, flag }) {

    const topLine = useRef(null);
    const bottomLine = useRef(null);

    useGSAP(() => {
        if (flag) {
            gsap.to(topLine.current, {
                rotation: 45,
                transformOrigin: "center",
                y: 8,
            });

            gsap.to(bottomLine.current, {
                rotation: -45,
                transformOrigin: "center",
                y: -8,
            });
        } else {
            gsap.to([topLine.current, bottomLine.current], {
                rotation: 0,
                transformOrigin: "center",
                y: 0,
            });
        }
    }, [flag])

    return (
        <button className={`menu-btn ${flag ? 'open' : ''}`} onClick={toggleMenu}>
            <svg width="40" height="40" viewBox="0 0 100 100">
                <rect className="line top" ref={topLine} width="80" height="10" x="10" y="35" rx="5" />
                <rect className="line bottom" ref={bottomLine} width="80" height="10" x="10" y="55" rx="5" />
            </svg>
        </button>
    );
}

export default Header;
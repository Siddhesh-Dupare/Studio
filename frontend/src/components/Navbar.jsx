import './navbar.css'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

const Header = () => {

    // const word = useRef(null);

    // gsap.registerPlugin(SplitText);

    // useEffect(() => {

    //     const split = new SplitText(word.current, {
    //         type: 'words,chars'
    //     });

    //     let char = split.chars;

    //     gsap.from(char, {
    //         yPercent: 50,
    //         opacity: 0,
    //         stagger: 0.02,
    //     });

    //     gsap.to(char, {
    //         delay: 1,
    //         yPercent: -80,
    //         stagger: 0.02,
    //     })
    // }, []);

    const [open, setOpen] = useState(false);

    const container = useRef();
    const tl = useRef();

    const toggleTimeLine = () => {
        tl.current.reversed(!tl.current.reversed());
    }
    
    useGSAP(() => {
        const links = gsap.utils.toArray(".link");

        tl.current = gsap
            .timeline()
            .to(links, { y: 10, opacity: 1, ease: "back.out", duration: 0.8, stagger: 0.1 })
            .reverse();
        }, { scope: container }
    );

    // useGSAP(() => {
    //     const links = gsap.utils.toArray(".link");
    //     tl.current = gsap
    //         .timeline()
    //         .from(links, { y: 0, opacity: 0, ease: "back.out", duration: 0.8, stagger: 0.1 })
    //         .reverse();
    // }, { scope: container });

    return (
        <>
            <header>
                <div className="logo-container">
                    <h1 className="logo">Studio Size</h1>
                </div>

                <nav className={`${!open ? 'hide': ''}`} ref={ container }>
                    <a href="#" className="link">Home</a>
                    <a href="#" className="link">Portfolio</a>
                    <a href="#" className="link">About</a>
                    <a href="#" className="link">Labs</a>
                    <a href="#" className="link">Contact</a>
                </nav>

                <div className="menu-container" onClick={ toggleTimeLine }>
                    <HamburgerMenu flag={ open } setFlag={ setOpen } />
                </div>

                <div className={`nav-footer-container ${!open ? 'hide': ''}`}>
                    <div className="nav-footer">
                            <a href="#" className="link">Instagram</a>
                            <a href="#" className="link">Vimeo</a>
                            <a href="#" className="link">Savee.in</a>

                            <a href="#" className="link">Behance</a>
                            <a href="#" className="link">Youtube</a>
                            <a href="#" className="link">Fonts in Use</a>

                            <a href="#" className="link">Dribble</a>
                            <a href="#" className="link">LinkedIn</a>
                            <a href="#" className="link">Pinterest</a>
                    </div>
                </div>
            </header>
        </>
    );
}

function HamburgerMenu({ flag, setFlag }) {

    return (
        <>
            <button className={`hamburger ${flag ? 'open' : ''}`} onClick={() => setFlag(!flag)} >
                <svg width="40" height="40" viewBox="0 0 100 100">
                    <rect className="line top" width="80" height="10" x="10" y="35" rx="5"></rect>
                    <rect className="line bottom" width="80" height="10" x="10" y="55" rx="5"></rect>
                </svg>
            </button>
        </>
    );
}

export default Header;
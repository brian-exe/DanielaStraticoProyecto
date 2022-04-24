import React, { useEffect, useState } from 'react';
import imgScroll from '../../assets/scrolltotop.png';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            e.preventDefault()
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 800) {
                setVisible(true)
            }
            else if (scrolled <= 300) {
                setVisible(false)
            }
        });

    }, []);



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <>
            <div onClick={scrollToTop} className="stickyCont">
                <img className="scrollImg" src={imgScroll} alt="scroll to top icon" style={{ display: visible ? 'inline' : 'none' }} />
            </div>
        </>
    );
}

export default ScrollButton;
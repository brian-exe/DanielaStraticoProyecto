import React, { useState } from 'react';
import imgScroll from '../../assets/scrolltotop.png';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <img onClick={scrollToTop} src={imgScroll} alt="scroll to top icon" style={{display: visible ? 'inline' : 'none'}} />
        </>
    );
}

export default ScrollButton;
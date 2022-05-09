import React, { useEffect, useState } from 'react';
import imgScroll from '../../assets/scrolltotop.png';
import imgWhatsapp from '../../assets/whatsappBtn.png';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)
    const nroTelefono = "541168090888";

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            e.preventDefault()
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 500) {
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


    const goToWhatsapp = (e) => {
        e.preventDefault()
        const whatsappUrl = "https://wa.me/" + nroTelefono;
        openInNewTab(whatsappUrl);
    };

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <>
            <div  className="stickyCont">
                <div onClick={scrollToTop}>
                    <img className="scrollImg" src={imgScroll} alt="ir arriba" style={{ display: visible ? 'inline' : 'none' }} />
                </div>
                <div onClick={goToWhatsapp}>
                    <img className="scrollImg" src={imgWhatsapp} alt="Whatsapp" />
                </div>
            </div>
        </>
    );
}

export default ScrollButton;
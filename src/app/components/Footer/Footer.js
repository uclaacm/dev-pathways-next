import React from 'react';
import facebook from './facebook.svg';
import github from './github.svg';
import instagram from './instagram.svg';
import medium from './medium.svg';
import './Footer.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <div className="social-media">
                <span id="social-media-header">Find us on Social Media!</span>
                <div className="social-media-icons-container">
                    <a href="https://www.instagram.com/acm.ucla/" target="_blank" rel="noreferrer noopener">
                        <Image src={instagram} alt="ACM instagram link" className="social-media-icon" height={32} width={32}/>
                    </a>
                    <a href="https://www.facebook.com/uclaacm" target="_blank" rel="noreferrer noopener">
                        <Image src={facebook} alt="ACM facebook link" className="social-media-icon"/>
                    </a>
                    <a href="https://github.com/uclaacm/dev-pathways" target="_blank" rel="noreferrer noopener">
                        <Image src={github} alt="Dev Pathways Github link" className="social-media-icon"/>
                    </a>
                    <a href="https://medium.com/techatucla" target="_blank" rel="noreferrer noopener">
                        <Image src={medium} alt="ACM medium link" className="social-media-icon"/>
                    </a>
                </div>
            </div>
            <span>
            Want to contribute to the site? <br />
            Fill out <a href="https://forms.gle/YrLQr8nmDyBEyXs59" target="_blank" rel="noreferrer noopener">this</a> form.
            </span>
        </footer>
    );
};

export default Footer;
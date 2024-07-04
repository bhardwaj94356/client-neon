import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='insideFooter'>
                <div className='insideFooterLeft'>
                    <p>Site Map: Site map is about the current web pages present in the website or the web application.</p>
                </div>
                <div className='insideFooterRight'>
                    <p>Daisy Complex (near Delhivery Office), Khatkhati, Moran, Assam, 785670, India</p>
                </div>
            </div>
            <div className='devs'>
                <p>Designed & Developed by: Bhardwaj Thengal & Kanak Sonowal<br/>Copyright © 64bit</p>
            </div>
        </div>
    )
}

export default Footer;
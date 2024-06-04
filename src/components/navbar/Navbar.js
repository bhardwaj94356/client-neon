import React from "react";
import './Navbar.css';
import Logo from '../../images/neon_logo.png';

const Navbar = () => {
    return(
        <div className="navbarStyle">
            <div className="firstHeader">
                Free shipping across Assam
            </div>
            <div className="insideHeader">
                <img className="image" src={Logo} alt="Logo Design" style={{width: 150, borderRadius: 5}}/>
                <div className="listItems">
                    <ul className="ul-list">
                        <li>Home</li>
                        <li>Neon Signs</li>
                        <li>Pop Arts</li>
                        <li>Wall Clocks</li>
                        <li>Photo Frames</li>
                    </ul>
                </div>
                <div>
                    <input type="text" placeholder="Search for items" style={{borderRadius: 5, height: 30}}/>
                </div>
            </div>
        </div>
        
    )
};

export default Navbar;
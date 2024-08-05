import React, { useState } from "react";
import './Navbar.css';
import Logo from '../../images/logo_3.png';
import {Link} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return(
        <div className="navbarStyle">
            {/* <div className="firstHeader">
                Free shipping across Assam
            </div> */}
            <div className="insideHeader">
                <Link to='/'>
                    <img className="image" src={Logo} alt="Logo Design" style={{width: 150, borderRadius: 10, marginLeft:20}}/>
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes style={{marginRight:20}} /> : <FaBars style={{marginRight:'20'}} />}
                </div>
                {/* <div className="listItems"> */}
                <ul className={isOpen ? "listItems active" : "listItems"}>
                    <li>
                        <Link className="colLink" to='/' style={{textDecoration: 'none'}}>Home</Link>
                    </li>
                    <li>
                        <Link className="colLink" to='/customize' style={{textDecoration: 'none'}}>Customize</Link>
                    </li>
                    <li>
                        <Link className="colLink" to='/' style={{textDecoration: 'none'}}>About Us</Link>
                    </li>
                </ul>
                {/* </div> */}
                {/* <div>
                    <input type="text" placeholder="Search for items" style={{borderRadius: 5, height: 30}}/>
                </div> */}
            </div>
        </div>
        
    )
};

export default Navbar;
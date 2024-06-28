import React from "react";
import './Navbar.css';
import Logo from '../../images/logo_3.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbarStyle">
            {/* <div className="firstHeader">
                Free shipping across Assam
            </div> */}
            <div className="insideHeader">
                <Link to='/'>
                    <img className="image" src={Logo} alt="Logo Design" style={{width: 150, borderRadius: 10}}/>
                </Link>
                <div className="listItems">
                    <li>
                        <Link className="colLink" to='/' style={{textDecoration: 'none'}}>Neon Sign</Link>
                    </li>
                    <li>
                        <Link className="colLink" to='/' style={{textDecoration: 'none'}}>Pop Arts</Link>
                    </li>
                    <li>
                        <Link className="colLink" to='/' style={{textDecoration: 'none'}}>Wall Clock</Link>
                    </li>
                    <li>
                        <Link className="colLink" to='/' style={{textDecoration: 'none'}}>Photo Frames</Link>
                    </li>
                    <li>
                        <Link className="colLink" to='/' style={{textDecoration: 'none'}}>About Us</Link>
                    </li>
                </div>
                <div>
                    <input type="text" placeholder="Search for items" style={{borderRadius: 5, height: 30}}/>
                </div>
            </div>
        </div>
        
    )
};

export default Navbar;
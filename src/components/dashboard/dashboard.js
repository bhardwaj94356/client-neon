import React from 'react';
import './dashboard.css';
import White_Neon from '../../images/neon_white.jpg';
import Blue_Neon from '../../images/neon_blue.jpg';
import Cool_Blue_Neon from '../../images/neon_cool_blue.jpg';
import Purple_Neon from '../../images/neon_purple.jpg';
import Red_Neon from '../../images/neon_red.jpg';
import Yellow_Neon from '../../images/neon_yellow.jpg';
import Footer from '../footer/Footer';

const Dashboard = () => {
    return(
        <div className='dashboardStyle'>
            <h1 style={{marginTop: 150}}>Khelpe's Neon</h1>
            <div className='neonImg'>
                <div className='mostSell'>
                    <h2>Most Selling Products</h2>
                    <div className='mostSellingItems'>
                        <div className='neonDetails'>
                            <img src={White_Neon} alt='White Neon' />
                            <p>White Neon<br/>100m<br/>Rs. 1000</p>
                        </div>
                        <div className='neonDetails'>
                            <img src={Blue_Neon} alt='Blue Neon' />
                            <p>Blue Neon<br/>100m<br/>Rs. 1000</p>
                        </div>
                        <div className='neonDetails'>
                            <img src={Cool_Blue_Neon} alt='Cool Blue Neon' />
                            <p>Cool Blue Neon<br/>100m<br/>Rs. 1000</p>
                        </div>
                        <div className='neonDetails'>
                            <img src={Purple_Neon} alt='Purple Neon' />
                            <p>Purple Neon<br/>100m<br/>Rs. 1000</p>
                        </div>
                    </div>
                </div>
                <div className='mostSell'>
                    <h2>Neon Collections</h2>
                    <div className='mostSellingItems'>
                        <div className='neonDetails'>
                            <img src={Red_Neon} alt='Red Neon' />
                            <p>Red Neon<br/>100m<br/>Rs. 1000</p>
                        </div>
                        <div className='neonDetails'>
                            <img src={Yellow_Neon} alt='Yellow Neon' />
                            <p>Yellow Neon<br/>100m<br/>Rs. 1000</p>
                        </div>
                        <div className='neonDetails'>
                            <img src={White_Neon} alt='White Neon' />
                            <p>White Neon<br/>100m<br/>Rs. 1000</p>
                        </div>
                        <div className='neonDetails'>
                            <img src={Blue_Neon} alt='Blue Neon' />
                            <p>Blue Neon<br/>100m<br/>Rs. 1000</p>
                        </div>    
                        <div className='neonDetails'>
                            <img src={Cool_Blue_Neon} alt='Cool Blue Neon' />
                            <p>Cool Blue Neon<br/>100m<br/>Rs. 1000</p>
                        </div>
                        <div className='neonDetails'>
                            <img src={Purple_Neon} alt='Purple Neon' />
                            <p>Purple Neon<br/>100m<br/>Rs. 1000</p>
                        </div>
                        <div className='neonDetails'>
                            <img src={Red_Neon} alt='Red Neon' />
                            <p>Red Neon<br/>100m<br/>Rs. 1000</p>
                        </div>
                        <div className='neonDetails'>
                            <img src={Yellow_Neon} alt='Yellow Neon' />
                            <p>Yellow Neon<br/>100m<br/>Rs. 1000</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Dashboard;
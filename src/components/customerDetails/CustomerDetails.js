import React from 'react'
import { useLocation } from 'react-router-dom'
import './customerDetails.css'

const CustomerDetails = () => {
    const location = useLocation()
    const { text, fontStyle, colour } = location.state
    
    return(
        <div className='detailsStyle'>
            <h1>ORDER DETAILS</h1>
            <div className='orderDetails'>
                <div className='neonText'>
                    <p className='para' style={{ fontFamily:fontStyle, color:colour }}>{text}</p>
                </div>
                <p>Font style : <b>{fontStyle}</b><br/>Font colour : <b>{colour}</b></p>
                <select name="cars" id="cars" style={{marginBottom:10, width:239, height:30}}>
                    <option value="volvo">Select Size</option>
                    <option value="saab">Size 1</option>
                    <option value="mercedes">Size 2</option>
                    <option value="audi">Size 3</option>
                </select>
                <input type='text' id='name' placeholder='Name'></input>
                <input type='number' id='phno' placeholder='Phone Number'></input>
                <textarea id='address' placeholder='Address' rows={10} cols={30}></textarea>
                <button onClick={() => window.history.back()}>Close</button>
            </div>
        </div>
        
    )
}

export default CustomerDetails
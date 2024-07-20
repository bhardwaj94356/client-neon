import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './customerDetails.css'
import axios from 'axios';

const CustomerDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { text, fontStyle, colour } = location.state
    const [size, setSize] = useState('')
    const [name, setName] = useState('')
    const [phno, setPhno] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3001/customer_details', {
                text,
                fontStyle,
                colour,
                size,
                name,
                phno,
                address
            });
            console.log('Response from backend:', response.data);
            alert('Order submitted Successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    
    return(
        <div className='detailsStyle'>
            <h1>ORDER DETAILS</h1>
            <div className='orderDetails'>
                <div className='neonText'>
                    <p className='para' style={{ fontFamily:fontStyle, color:colour }} >{text}</p>
                </div>
                <p>Font style : <b>{fontStyle}</b><br/>Font colour : <b>{colour}</b></p>
                <select name="size" id="size" style={{marginBottom:10, width:239, height:30}} value={size} onChange={(e) => setSize(e.target.value)} required>
                    <option value="">Select Size</option>
                    <option value="size 1">Size 1</option>
                    <option value="size 2">Size 2</option>
                    <option value="size 3">Size 3</option>
                </select>
                <input type='text' name='name' id='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required></input>
                <input type='number' name='phno' id='phno' placeholder='Phone number' value={phno} onChange={(e) => setPhno(e.target.value)} required></input>
                <textarea name='address' id='address' placeholder='Address & pin code' rows={10} cols={30} value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
                <button onClick={handleSubmit}>Submit Order</button>
            </div>
        </div>
    )
}

export default CustomerDetails
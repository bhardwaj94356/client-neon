import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './customerDetails.css'
import axios from 'axios';

const CustomerDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { text, fontStyle, colour } = location.state
    const [size, setSize] = useState('')
    const [customHeight, setCustomHeight] = useState('')
    const [customLength, setCustomLength] = useState('')
    const [name, setName] = useState('')
    const [phno, setPhno] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = async () => {
        try {
            const orderSize = size === "Custom Size" ? `Height:${customHeight} feet, Length:${customLength} feet` : size;

            const response = await axios.post('http://localhost:3001/customer_details', {
                text,
                fontStyle,
                colour,
                size: orderSize,
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

    return (
        <div className='detailsStyle'>
            <h1>ORDER DETAILS</h1>
            <div className='orderDetails'>
                <div className='neonText'>
                    <p className='para' style={{ fontFamily: fontStyle, color: colour }}>{text}</p>
                </div>
                <p>Font style: <b>{fontStyle}</b><br />Font colour: <b>{colour}</b></p>
                <select name="size" id="size" style={{ marginBottom: 10, width: 239, height: 30 }} value={size} onChange={(e) => setSize(e.target.value)} required>
                    <option value="">Select Size</option>
                    <option value="Height:12, Length:20 (S)">Height:12, Length:20 (S)</option>
                    <option value="Height:18, Length:30 (M)">Height:18, Length:30 (M)</option>
                    <option value="Height:24, Length:40 (L)">Height:24, Length:40 (L)</option>
                    <option value="Custom Size">Custom Size</option>
                </select>
                {size === "Custom Size" && (
                    <div>
                        <input type='number' name='customHeight' id='customHeight' placeholder='Custom Height (in feet)' value={customHeight} onChange={(e) => setCustomHeight(e.target.value)} required />
                        <input type='number' name='customLength' id='customLength' placeholder='Custom Length (in feet)' value={customLength} onChange={(e) => setCustomLength(e.target.value)} required />
                    </div>
                )}
                <input type='text' name='name' id='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                <input type='number' name='phno' id='phno' placeholder='Phone number' value={phno} onChange={(e) => setPhno(e.target.value)} required />
                <textarea name='address' id='address' placeholder='Address & pin code' rows={10} cols={30} value={address} onChange={(e) => setAddress(e.target.value)} required />
                <button onClick={handleSubmit}>Submit Order</button>
            </div>
        </div>
    )
}

export default CustomerDetails

import React, { useEffect, useState } from 'react';
import './customize.css';

const Customize = () => {

  const [text, setText] = useState('');
  const [fontStyle, setFontStyle] = useState('');
  const [colour, setColour] = useState('');

  const changeText = (e) => {
    setText(e.target.value);
  };

  const changeFontStyle = (font) => {
    setFontStyle(font);
  };

  const changeColour = (color) => {
    setColour(color);
  };

  //function to change the text colour
  //function to add all the changes as text to the database

  return (
    <div className='customContent'>
      <div className='styling'>
        <div className='preview'>
          <p style={{ fontFamily: fontStyle }}>{text}</p>
        </div>
        <div className='fontStyles'>
          <h1>Customize</h1>
          <input type='text' id="text_preview" value={text} onChange={changeText} placeholder='Text Preview' style={{height:80, width:'83%', textAlign: 'center' }}/>
          <hr style={{width:'40svw', height:3, backgroundColor:'black', marginTop:30}}/>
          <h3>Pick Your Font</h3>
          <div className='fonts'>
            <button className='chooseFont' onClick={() => changeFontStyle('Arial Black')}>Arial</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Rockwell Extra Bold')}>Rockwell</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Courier New')}>Courier</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Papyrus, fantasy')}>Papyrus</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Copperplate')}>Copperplate</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Verdana')}>Verdana</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Playwrite CO, cursive')}>Cursive</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Train One, system-ui')}>Outline</button>
          </div>
           <hr style={{width:'40svw', height:3, backgroundColor:'black', marginTop:30}}/>
           <h3>Select Your Colour</h3>
           <div className='color'>
              <div className='colorCode' style={{backgroundColor:'red'}} onClick={() => changeColour()}></div>
              <div className='colorCode' style={{backgroundColor:'white'}}></div>
              <div className='colorCode' style={{backgroundColor:'green'}}></div>
              <div className='colorCode' style={{backgroundColor:'blue'}}></div>
              <div className='colorCode' style={{backgroundColor:'yellow'}}></div>
              <div className='colorCode' style={{backgroundColor:'pink'}}></div>
              <div className='colorCode' style={{backgroundColor:'cyan'}}></div>
              <div className='colorCode' style={{backgroundColor:'orange'}}></div>
              <div className='colorCode' style={{backgroundColor:'purple'}}></div>
            </div>
            <button>Place Your Order</button>
        </div>
      </div>
    </div>
  );
}

export default Customize;

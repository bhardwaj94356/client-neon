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

  //function to add all the changes as text to the database

  return (
    <div className='customContent'>
      <div className='styling'>
        <div className='preview'>
          <p style={{ fontFamily: fontStyle, color: colour}}>{text}</p>
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
              <button className='colorCode' style={{backgroundColor:'red'}} onClick={() => changeColour('red')}></button>
              <button className='colorCode' style={{backgroundColor:'white'}} onClick={() => changeColour('white')}></button>
              <button className='colorCode' style={{backgroundColor:'green'}} onClick={() => changeColour('green')}></button>
              <button className='colorCode' style={{backgroundColor:'blue'}} onClick={() => changeColour('blue')}></button>
              <button className='colorCode' style={{backgroundColor:'yellow'}} onClick={() => changeColour('yellow')}></button>
              <button className='colorCode' style={{backgroundColor:'pink'}} onClick={() => changeColour('pink')}></button>
              <button className='colorCode' style={{backgroundColor:'cyan'}} onClick={() => changeColour('cyan')}></button>
              <button className='colorCode' style={{backgroundColor:'orange'}} onClick={() => changeColour('orange')}></button>
              <button className='colorCode' style={{backgroundColor:'purple'}} onClick={() => changeColour('#B03AF0')}></button>
            </div>
            <button>Place Your Order</button>
        </div>
      </div>
    </div>
  );
}

export default Customize;

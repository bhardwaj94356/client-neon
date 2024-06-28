import React, { useEffect, useState } from 'react';
import './customize.css';

const Customize = () => {

  //function to change the text style

  return (
    <div className='customContent'>
      <div className='styling'>
        <div className='preview'>
          <p>Text Preview</p>
        </div>
        <div className='fontStyles'>
          <h1>Customize</h1>
          <input type='text' placeholder='Text Preview' style={{height:80, width:500 }}/>
          <hr style={{width:'40svw', height:3, backgroundColor:'black', marginTop:30}}/>
          <h3>Pick Your Font</h3>
          <div className='fonts'>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
            <div className='chooseFont'>
              <p>Test Font</p>
            </div>
           </div>
           <hr style={{width:'40svw', height:3, backgroundColor:'black', marginTop:30}}/>
           <h3>Select Your Colour</h3>
        </div>
      </div>
    </div>
  );
}

export default Customize;

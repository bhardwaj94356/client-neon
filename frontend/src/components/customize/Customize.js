import React, { useState } from 'react'
import './customize.css'
import SofaOrange from '../../images/sofa_wall_orange.jpg'
import SofaBlue from '../../images/sofa_wall_blue.jpg'
import SofaWhite from '../../images/sofa_wall_white.jpg'
import Store from '../../images/storefront.jpeg'
import { useNavigate } from 'react-router-dom'

const Customize = () => {

  const [text, setText] = useState('')
  const [fontStyle, setFontStyle] = useState('')
  const [colour, setColour] = useState('')
  const [image, setImage] = useState(Store)
  const navigate = useNavigate()

  const changeText = (e) => {
    setText(e.target.value);
  };

  const changeFontStyle = (font) => {
    setFontStyle(font);
  };

  const changeColour = (color) => {
    setColour(color);
  };

  const changeImage = (photo) => {
    setImage(photo)
  }

  const handleSubmit = () => {
    navigate('/customerDetails', { state: {text, fontStyle, colour} })
  }

  //function to add all the changes as text to the database

  return (
    <div className='customContent'>
      <div className='styling'>
        <div>
          <div className='preview'>
            <img src={image} alt="Choose an image from below" width={500} height={500} style={{borderRadius:5, fontSize:20, textAlign:'center'}} className='resize' />
            <p style={{ fontFamily: fontStyle, color: colour}} className='preview-text'>{text}</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20}}>
            <img src={SofaOrange} onClick={() => changeImage(SofaOrange)} alt='Sofa, orange background' width={80} style={{marginTop: 10, borderRadius: 5}}/>
            <img src={SofaBlue} onClick={() => changeImage(SofaBlue)} alt='Sofa, Blue background' width={80} style={{marginTop: 10, borderRadius: 5}}/>
            <img src={SofaWhite} onClick={() => changeImage(SofaWhite)} alt='Sofa, White background' width={80} style={{marginTop: 10, borderRadius: 5}}/>
          </div>
        </div>
        <div className='fontStyles'>
          <h1>Customize</h1>
          <input type='text' id="text_preview" value={text} onChange={changeText} placeholder='Text Preview' style={{height:80, width:'83%', textAlign: 'center' }}/>
          <hr style={{width:'40svw', height:3, backgroundColor:'black', marginTop:30}}/>
          <h3>Pick Your Font</h3>
          <div className='fonts'>
            <button className='chooseFont' onClick={() => changeFontStyle('Big Spender')} style={{fontFamily:'Big Spender'}}>Big Spender</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Cactron')} style={{fontFamily:'Cactron'}}>Cactron</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Camilla')} style={{fontFamily:'Camilla'}}>Camilla</button>
            {/* <button className='chooseFont' onClick={() => changeFontStyle('Playwrite CO, cursive')} style={{fontFamily:'Playwrite CO, cursive'}}>Cursive</button> */}
            <button className='chooseFont' onClick={() => changeFontStyle('Havana')} style={{fontFamily:'Havana'}}>Havana</button>
            {/* <button className='chooseFont' onClick={() => changeFontStyle('Mallino')} style={{fontFamily:'Mallino'}}>Mallino</button> */}
            <button className='chooseFont' onClick={() => changeFontStyle('Misterly')} style={{fontFamily:'Misterly'}}>Misterly</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Neon-Christmas')} style={{fontFamily:'Neon-Christmas'}}>Neon-Christmas</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Neonderthaw')} style={{fontFamily:'Neonderthaw'}}>Neonderthaw</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Neoneon')} style={{fontFamily:'Neoneon'}}>Neon Eon</button>
            <button className='chooseFont' onClick={() => changeFontStyle('neonsign')} style={{fontFamily:'neonsign'}}>Neon Sign</button>
            <button className='chooseFont' onClick={() => changeFontStyle('nostrade')} style={{fontFamily:'nostrade'}}>Nostrade</button>
            <button className='chooseFont' onClick={() => changeFontStyle('onoma')} style={{fontFamily:'onoma'}}>Onoma</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Playwrite_AU')} style={{fontFamily:'Playwrite_AU'}}>Playwrite AU</button>
            <button className='chooseFont' onClick={() => changeFontStyle('Playwrite_GB_S')} style={{fontFamily:'Playwrite_GB_S'}}>Playwrite GB</button>
            <button className='chooseFont' onClick={() => changeFontStyle('send_flowers')} style={{fontFamily:'send_flowers'}}>Send Flowers</button>
            <button className='chooseFont' onClick={() => changeFontStyle('srfm_neon')} style={{fontFamily:'srfm_neon'}}>SRFM Neon</button>
            <button className='chooseFont' onClick={() => changeFontStyle('sunday-script-typeface')} style={{fontFamily:'sunday-script-typeface'}}>Script Typeface</button>
            <button className='chooseFont' onClick={() => changeFontStyle('testimonia')} style={{fontFamily:'testimonia'}}>Testimonia</button>
            <button className='chooseFont' onClick={() => changeFontStyle('vintage-neon')} style={{fontFamily:'vintage-neon'}}>Vintage</button>
          </div>
          <hr style={{width:'40svw', height:3, backgroundColor:'black', marginTop:30}}/>
          <h3>Select Your Colour</h3>
          <div className='color'>
            <button className='colorCode' style={{backgroundColor:'red'}} onClick={() => changeColour('red')}></button>
            <button className='colorCode' style={{backgroundColor:'white'}} onClick={() => changeColour('white')}></button>
            <button className='colorCode' style={{backgroundColor:'lightgreen'}} onClick={() => changeColour('lightgreen')}></button>
            <button className='colorCode' style={{backgroundColor:'blue'}} onClick={() => changeColour('blue')}></button>
            <button className='colorCode' style={{backgroundColor:'yellow'}} onClick={() => changeColour('yellow')}></button>
            <button className='colorCode' style={{backgroundColor:'pink'}} onClick={() => changeColour('pink')}></button>
            <button className='colorCode' style={{backgroundColor:'cyan'}} onClick={() => changeColour('cyan')}></button>
            <button className='colorCode' style={{backgroundColor:'orange'}} onClick={() => changeColour('orange')}></button>
            <button className='colorCode' style={{backgroundColor:'purple'}} onClick={() => changeColour('#B03AF0')}></button>
           </div>
          <button id='submit' onClick={handleSubmit}>Place Your Order</button>
        </div>
      </div>
    </div>
  );
}

export default Customize;

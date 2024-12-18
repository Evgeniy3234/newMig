import '../../Main.css';
import "../../MainPage/MainPage.css"
import Header from '../../Header/Header';
import InfoLine from '../../InfoLine/InfoLine';
import Footer from '../../Footer/Footer';


import Doc1 from "../../ImageSource/Doc1.png"
import Doc2 from "../../ImageSource/Doc2.png"
import Doc3 from "../../ImageSource/Doc3.png"

import React, { useState } from 'react';

import Greeting from '../Components/Greeting/Greeting'

function Research() {

  return (
    <div className="MainPage">
      <InfoLine/>
      <Header/>
      <div className='MainContainer'> 
        <div className="MainBody">
          <Greeting 
            FirstPart={[<p>НАУЧНЫЕ <br/>ИССЛЕДОВАНИЯ</p>]}
            SecondPart={[<b>Результат выполнения работ </b>,'- комплексный анализ проблемы и предоставление рациональных, экономичных и надёжных решений.']}
          />
        </div>
      </div>

    <div className='DocsContainer'>
      <div className='SecondContainerItem'>
        <span className='DocsTittleText'>Разрешительные документы</span>
        <div className='DocsArea'>
          <img src={Doc1} alt="" className='DocImg'></img>
          <img src={Doc2} alt="" className='DocImg'></img>
          <img src={Doc3} alt="" className='DocImg'></img>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  );
}

export default Research;

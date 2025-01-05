import '../../Main.css';
import "../../MainPage/MainPage.css"
import "./Research.css"
import Header from '../../Header/Header';
import InfoLine from '../../InfoLine/InfoLine';
import Footer from '../../Footer/Footer';

import {source,options} from './SecondPart.js'
import ResearchImg from './ImgSource/Research.png'

import React, { useState } from 'react';

import Greeting from '../Components/Greeting/Greeting'
import SecondPart from '../Components/SecondPart/SecondPart'

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
          <img className='ResearchImg' src={ResearchImg} alt=''></img>
          <span className='SecondPartTittle'>Мы предлагаем:</span>
          <SecondPart source={source} options={options}/>
        </div>
      </div>
    <Footer></Footer>
  </div>
  );
}

export default Research;

import '../../Main.css';
import "../../MainPage/MainPage.css"
import "./Research.css"
import Header from '../../Header/Header';
import InfoLine from '../../InfoLine/InfoLine';
import Footer from '../../Footer/Footer';

import {source,options} from './SecondPart.js'
import ResearchImg from './ImgSource/Research1.jpg'
import Modal from "../Components/Modal/Modal.jsx"

import React, { useState,useEffect } from 'react';
import {useLocation} from "react-router-dom";

import Greeting from '../Components/Greeting/Greeting'
import SecondPart from '../Components/SecondPart/SecondPart'

function Research() {

  const [active,Setactive] = useState(false)
  const {pathname} = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
          <img className='ResearchImg custom_full_widthRes' src={ResearchImg} alt=''></img>
          <span className='SecondPartTittle'>Мы предлагаем:</span>
          <SecondPart source={source} options={options}/>
        </div>
      </div>
    <Footer></Footer>
    <Modal active={active} Setactive={Setactive}></Modal>
  </div>
  );
}

export default Research;

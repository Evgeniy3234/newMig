import '../../Main.css';
import "../../MainPage/MainPage.css"
import Header from '../../Header/Header';
import InfoLine from '../../InfoLine/InfoLine';
import Footer from '../../Footer/Footer';

import SecondPart from '../Components/SecondPart/SecondPart'
import source from './SecondPart.js'
import Modal from "../Components/Modal/Modal.jsx"

import ImgThird from './ImgSource/ThirdPartDesign1.png'
import ThirdPart from '../Components/ThirdPart/ThirdPart.jsx';
import ThirdSource from './ThirdPart.js'

import React, { useState } from 'react';

import Greeting from '../Components/Greeting/Greeting'

import Img1 from  '../Design/ImgSource/Design1.jpeg'
import Img2 from  '../Design/ImgSource/Design2.png'
import Img3 from  '../Design/ImgSource/Design3.png'

import FigCarusel from '../Components/FigCarusel/FigCarusel';
import '../Components/Component.css'
import '../Examination/Examination.css'

function Design() {

  const [active,Setactive] = useState(false)

  return (
    <div className="MainPage">
        <InfoLine/>
        <Header/>
        <div className='MainContainer'> 
          <div className="MainBody">
            <Greeting 
              FirstPart={[<p>ПРОЕКТИРОВАНИЕ</p>]} 
              SecondPart={[<b>Результат выполнения работ </b>,'- предоставление полного комплекта проектной и рабочей документации, получение согласования заинтересованных сторон.']}
            />
            <div className='CenterComp'>
              <FigCarusel Source={
                [
                {
                  'img': Img1,
                  'description': ''//'Выполнение чего-нибудь gggg', 
                },
                {
                  'img': Img2,
                  'description': ''//'Выполнение чего-нибудь gggg' 
                },
                {
                  'img': Img3,
                  'description': ''//'Выполнение чего-нибудь gggg' 
                },
              ]
              }/>
              <div className='Fl-col-e-s ExDescCont'>
                <span className='ExDescTitle'>Проектная документация на строительство, капитальный ремонт или реконструкцию</span>
                <button className="PrimaryButton" onClick={()=>{Setactive(true)}}>ОСТАВИТЬ ЗАЯВКУ</button>
              </div>
            </div>
            <span className='SecondPartTittle'>Основные услуги и их состав</span>
            <SecondPart source={source}/>
            
          </div>
        </div>
        <ThirdPart source={{'img' : ImgThird, 'parts' : ThirdSource }}></ThirdPart>
      <Footer></Footer>
      <Modal active={active} Setactive={Setactive}></Modal>
    </div>
  );
}

export default Design;

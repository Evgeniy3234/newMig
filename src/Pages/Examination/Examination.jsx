import '../../Main.css';
import "../../MainPage/MainPage.css"
import Header from '../../Header/Header';
import InfoLine from '../../InfoLine/InfoLine';
import Footer from '../../Footer/Footer';

import Img1 from './ImgSource/Examination1.jpeg'

import Img2 from  '../Design/ImgSource/Design1.jpeg'

import Doc1 from "../../ImageSource/Doc1.png"
import Doc2 from "../../ImageSource/Doc2.png"
import Doc3 from "../../ImageSource/Doc3.png"

import React, { useState } from 'react';

import Greeting from '../Components/Greeting/Greeting'
import FigCarusel from '../Components/FigCarusel/FigCarusel';
import '../Components/Component.css'
import './Examination.css'



function Examination() {

  return (
    <div className="MainPage">
        <InfoLine/>
        <Header/>
        <div className='MainContainer'> 
          <div className="MainBody">
            <Greeting 
              FirstPart={[<p>ОБСЛЕДОВАНИЕ <br/>ПОРТОВЫХ ГТС </p>]}
              SecondPart={[<b>Результат выполнения работ </b>,'- доказательная база для регистрации декларации соответствия, детальная информация о сооружении, а так же рекомендации по эксплуатации и ремонту.']}
            />
            <div className='CenterComp'>
              <FigCarusel Source={
                [
                  {
                  'img': Img1,
                  'description': 'Выполнение топографической съёмки' 
                },
                {
                  'img': Img2,
                  'description': 'Выполнение чего-нибудь gggg' 
                }
              ]
              }/>
              <div className='Fl-col-e-s ExDescCont'>
                <span className='ExDescTitle'>Состав работ</span>
                <ol className='ExDescOl'>
                  <li>Анализ документации и конструкции сооружения</li>
                  <li>Визуальные обследования, дефектоскопия</li>
                  <li>Проведение инструментальных измерений</li>
                  <li>Анализ полученных данных и подготовка отчёта </li>
                  <li>Составление Паспорта ГТС с пополняемой частью</li>
                  <li>Подготовка протокола идентификации</li>
                </ol>
                <button className="PrimaryButton">ОСТАВИТЬ ЗАЯВКУ</button>
              </div>
            </div>
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

export default Examination;

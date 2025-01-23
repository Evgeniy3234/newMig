import '../../Main.css';
import "../../MainPage/MainPage.css"
import Header from '../../Header/Header';
import InfoLine from '../../InfoLine/InfoLine';
import Footer from '../../Footer/Footer';
import SecondPart from '../Components/SecondPart/SecondPart'
import ThirdPart from '../Components/ThirdPart/ThirdPart'

import Modal from "../Components/Modal/Modal.jsx"

import source from './SecondPart.js'
import ThirdSource from './ThirdPart.js'
import Img1 from './ImgSource/Examination1.jpeg'

import ImgThird from '../Examination/ImgSource/ThirdPartExamination1.png'

import React, { useState } from 'react';

import Greeting from '../Components/Greeting/Greeting'
import FigCarusel from '../Components/FigCarusel/FigCarusel';
import '../Components/Component.css'
import './Examination.css'

function Examination() {

const [active,Setactive] = useState(false)

  return (
    <div className="MainPage">
        <InfoLine/>
        <Header/>
        <div className='imgMainContainer'> 
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
                // {
                //   'img': Img2,
                //   'description': ''//'Выполнение чего-нибудь gggg' 
                // }
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
                <button className="PrimaryButton MarginButton" onClick={()=>{Setactive(true)}}>ОСТАВИТЬ ЗАЯВКУ</button>
              </div>
            </div>
            <span className='SecondPartTittle'>Выдаваемые документы</span>
            <SecondPart source={source}/>
          </div>
         
        </div>
       <ThirdPart source={{'img' : ImgThird, 'parts' : ThirdSource }}></ThirdPart>
      <Footer></Footer>
      <Modal active={active} Setactive={Setactive}></Modal>
    </div>
  );
}

export default Examination;

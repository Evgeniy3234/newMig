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
import Img1 from './ImgSource/Визуальный осмотр.jpg'
import Img2 from './ImgSource/Определение прочности бетона.jpg'
import Img3 from './ImgSource/определение толщины металла.jpeg'
import Img5 from './ImgSource/Промер глубин на акватории2.jpg'

import ImgThird from '../Examination/ImgSource/ThirdPartExamination.jpg'

import React, { useState,useEffect } from 'react';
import {useLocation} from "react-router-dom";

import Greeting from '../Components/Greeting/Greeting'
import FigCarusel from '../Components/FigCarusel/FigCarusel';
import '../Components/Component.css'
import './Examination.css'

function Examination() {

const [active,Setactive] = useState(false)
const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


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
                    'description': 'Визуальный осмотр' 
                  },
                  {
                    'img': Img2,
                    'description': 'Определение прочности бетона' 
                  },
                  {
                    'img': Img3,
                    'description': 'Определение толщины металла' 
                  },
                  {
                    'img': Img5,
                    'description': 'Промер глубин на акватории' 
                  },

         
              ]
              }/>
              <div className='Fl-col-e-s ExDescCont'>
                <span className='ExDescTitle'>Состав работ</span>
                <ol className='ExDescOl'>
                  <li>Анализ документации и конструкции сооружения</li>
                  <li>Визуальные обследования, дефектоскопия</li>
                  <li>Проведение инструментальных измерений</li>
                  <li>Водолазный осмотр подводной части сооружения</li>
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

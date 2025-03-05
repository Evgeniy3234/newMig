import '../../Main.css';
import "../../MainPage/MainPage.css"
import Header from '../../Header/Header';
import InfoLine from '../../InfoLine/InfoLine';
import Footer from '../../Footer/Footer';

import SecondPart from '../Components/SecondPart/SecondPart'
import source from './SecondPart.js'
import Modal from "../Components/Modal/Modal.jsx"

import ImgThird from './ImgSource/ThirdPartDesign.jpg'
import ThirdPart from '../Components/ThirdPart/ThirdPart.jsx';
import ThirdSource from './ThirdPart.js'

import React, { useState,useEffect } from 'react';
import {useLocation} from "react-router-dom";

import Greeting from '../Components/Greeting/Greeting'

import Img1 from  '../Design/ImgSource/Design1.png'
import Img2 from  '../Design/ImgSource/Design2.png'
import Img3 from  '../Design/ImgSource/Design3.jpg'
import Img5 from  '../Design/ImgSource/Design5.jpg'

import FigCarusel from '../Components/FigCarusel/FigCarusel';
import '../Components/Component.css'
import '../Examination/Examination.css'

function Design() {

  const [active,Setactive] = useState(false)
  const {pathname} = useLocation()

  const description = [
    'Проектная документация на строительство, капитальный ремонт или реконструкцию',
    'Разработка и установка геодезических сетей на сооружении',
    'Проекты мониторинга технического состояния сооружения'
  ]
  const [ind, Setind] = useState(0);
  const [descriptionValue,SetdescriptionValue] = useState(description[ind])


// useEffect(() => {
//   const myInterval = setInterval(() => {
//     Setind((prevInd) => prevInd > 1 ? 0 : prevInd + 1);
//   }, 2000);
//   // return () => clearInterval(myInterval);
// }, []);

// useEffect(()=>{
//   console.log('ind',ind)
//   SetdescriptionValue(description[ind])
// },[ind])


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
              FirstPart={[<p>ПРОЕКТИРОВАНИЕ</p>]} 
              SecondPart={[<b>Результат выполнения работ </b>,'- предоставление полного комплекта проектной и рабочей документации, получение согласования заинтересованных сторон.']}
            />
            <div className='CenterComp'>
              <FigCarusel
              isChild={true}
              Source={
                        [
                        {
                          'img': Img1,
                          'description': '',
                          'child' : 'Проектная документация на строительство, кап. ремонт или реконструкцию'
                        },
                        {
                          'img': Img2,
                          'description': '',
                          'child' : 'Разработка проектов геодезических сетей',
                        },
                        {
                          'img': Img3,
                          'description': '',
                          'child' : 'Устройство деформационной геодезической сети'
                        },
                        {
                          'img': Img5,
                          'description': '',
                          'child' : 'Проект мониторинга технического состояния'
                        },
                      ]
              }
              
              />
              {/* <div className='Fl-col-e-s ExDescCont'>
           
                <span className='ExDescTitle'>{descriptionValue}</span>
                <button className="PrimaryButton" onClick={()=>{Setactive(true)}}>ОСТАВИТЬ ЗАЯВКУ</button>
              </div> */}
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

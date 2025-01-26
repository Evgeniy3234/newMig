import '../../Main.css';
import "../../MainPage/MainPage.css"
import "./Monitoring.css"
import Header from '../../Header/Header';
import InfoLine from '../../InfoLine/InfoLine';
import Footer from '../../Footer/Footer';

import SecondPart from '../Components/SecondPart/SecondPart'
import source from './SecondPart.js'
import Modal from "../Components/Modal/Modal.jsx"

import ImgThird from './ImgSource/ThirdPartMonitorign1.png'
import ThirdPart from '../Components/ThirdPart/ThirdPart.jsx';
import ThirdSource from './ThirdPart.js'

import React, { useState,useEffect } from 'react';
import {useLocation} from "react-router-dom";

import Greeting from '../Components/Greeting/Greeting'
import Img1 from  './ImgSource/Monitoring1.png'
import Img2 from  './ImgSource/Monitoring2.jpg'

import FigCarusel from '../Components/FigCarusel/FigCarusel';
import '../Components/Component.css'
import '../Examination/Examination.css'

function Monitoring() {

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
              FirstPart={[<p>ГЕОДЕЗИЧЕСКИЙ <br/>МОНИТОРИНГ</p>]}
              SecondPart={[<b>Результат выполнения работ </b>,'- предоставление реальных данных о деформациях, смещениях и планово-высотном положении сооружения.']}
            />
             <div className='CenterComp'>
              <FigCarusel Source={
                [
                {
                  'img': Img1,
                  'description': ''//'Выполнение чего-нибудь gggg' 
                },
                {
                  'img': Img2,
                  'description': ''//'Выполнение чего-нибудь gggg' 
                }
              ]
              }/>
              <div className='Fl-col-e-s ExDescCont'>
                <span className='MoDescTitle'>Проведение геодезического мониторинга планово-высотных смещений сооружения позволяет контролировать их стабильность и безопасность, а также своевременно выявлять возможные деформации. Геодезический мониторинг, в общем случае, рекомендуется проводить не реже 1 раза в год (при отсутствии видимых признаков смещений).</span>
                <button className="PrimaryButton" onClick={()=>{Setactive(true)}}>ОСТАВИТЬ ЗАЯВКУ</button>
              </div>
            </div>
            <span className='SecondPartTittle'>Мы выполняем полный комплекс работ, в который входят:</span>
            <SecondPart source={source}/>
          </div>
        </div>
      <ThirdPart source={{'img' : ImgThird, 'parts' : ThirdSource }}></ThirdPart>
      <Footer></Footer>
      <Modal active={active} Setactive={Setactive}></Modal>
    </div>
  );
}

export default Monitoring;

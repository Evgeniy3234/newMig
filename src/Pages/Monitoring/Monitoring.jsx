import '../../Main.css';
import "../../MainPage/MainPage.css"
import "./Monitoring.css"
import Header from '../../Header/Header';
import InfoLine from '../../InfoLine/InfoLine';
import Footer from '../../Footer/Footer';

import SecondPart from '../Components/SecondPart/SecondPart'
import source from './SecondPart.js'
import Modal from "../Components/Modal/Modal.jsx"

import ImgThird from './ImgSource/ThirdPartMonitorign.jpg'
import ThirdPart from '../Components/ThirdPart/ThirdPart.jsx';
import ThirdSource from './ThirdPart.js'

import React, { useState,useEffect } from 'react';
import {useLocation} from "react-router-dom";

import Greeting from '../Components/Greeting/Greeting'
import Img1 from  './ImgSource/Monitoring1.jpg'
import Img2 from  './ImgSource/Monitoring2.jpg'
import Img3 from  './ImgSource/Monitoring3.jpg'

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
                    'description': 'Нивелирование' 
                  },
                  {
                    'img': Img2,
                    'description': 'Разбивка линейно-угловой сети' 
                  },
                  {
                    'img': Img3,
                    'description': 'Определение смещений сооружения' 
                  }
              ]
              }/>
              <div className='Fl-col-e-s ExDescCont'>
                <span className='ExDescTitle'>Цели и задачи мониторинга</span>
                <span className='MoDescTitle'>В соответствии с п. 482 Технического регламента о безопасности внутреннего водного транспорта Наблюдения за техническим состоянием ГТС должны включать наблюдения за смещениями сооружений в плане и по высоте.Проведение геодезического мониторинга планово-высотных смещений сооружения позволяет контролировать их стабильность и безопасность, а также своевременно выявлять возможные деформации. Геодезический мониторинг, в общем случае, рекомендуется проводить не реже 1 раза в год (при отсутствии видимых признаков смещений).</span>
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

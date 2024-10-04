import './MainPage.css';
import "../Main.css"
import Header from '../Header/Header';
import InfoLine from '../InfoLine/InfoLine';
import Footer from '../Footer/Footer';
import Arrow from "../ImageSource/Arrow.png"
import Service from "../Service/Service"
import IndividualIntervalsExample from "../Carusel/Carusel"

import Svg1 from "../SecondGridSvg/1.svg"
import Svg2 from "../SecondGridSvg/2.svg"
import Svg3 from "../SecondGridSvg/3.svg"
import Svg4 from "../SecondGridSvg/4.svg"
import Svg5 from "../SecondGridSvg/5.svg"
import Svg6 from "../SecondGridSvg/6.svg"

import Doc1 from "../ImageSource/Doc1.png"
import Doc2 from "../ImageSource/Doc2.png"
import Doc3 from "../ImageSource/Doc3.png"

import MainPageSource1 from "../ImageSource/MainPageSource.png"

import React, { useState } from 'react';

function MainPage() {

  const [service,setService] = useState([
    {
      "name" : "Обследование ГТС",
      "description" : "Освидетельствование и паспортизация,технические обследования"
    },
    {
      "name" : "Проектирование",
      "description" : "Реконструкция, капитальный ремонт ГТС"
    },
    {
      "name" : "Геодезический мониторинг",
      "description" : "Мониторинг планово-высотных смещений и кренов"
    },
    {
      "name" : "Научные исследования",
      "description" : "Выявление причин деформаций, гидравлические расчёты"
    },
  ])
  const [advantages,setAdvantages] = useState([
    {
      "img": Svg1,
      "description" : "Выполняем весь комплекс работ, необходимый для эксплуатации ГТС"
    },
    {
      "img": Svg2,
      "description" : "Работаем в соответствии с действующими нормативными документами"
    },
    {
      "img": Svg3,
      "description" : "Даём рекомендации по ремонту и эксплуатации"
    },
    {
      "img": Svg4,
      "description" : "Работаем даже в суровых условиях в любой точке России"
    },
    {
      "img": Svg5,
      "description" : "Имеем все необходимые разрешительные документы"
    },
    {
      "img": Svg6,
      "description" : "Остаёмся на связи после завершения работ по договору"
    },
  ])


  return (
    <div className="MainPage">
        <InfoLine/>
        <Header/>
        <div className='MainContainer'>
          <div className="MainBody">
            <div className='GreeteingContainer'>
              <span className='GreetingText1'>
                МОНИТОРИНГ <br/> И ГИДРОТЕХНИКА
              </span>
              <span className='GreetingText2'>
                Ваш надежный проводник <br/>
                в сфере обследований, эксплуатации <br/>
                и мониторинга
              </span>
              <button className="PrimaryButton Sp">ОСТАВИТЬ ЗАЯВКУ</button>
              <div className="ServicesContainer">
                <span className='GreetingText3'>
                  Наши услуги и <br/>
                  профессиональный опыт
                </span>
                <img className='ArrowImg' src={Arrow} alt=""></img>
              </div>
            </div>
            <div className="GridContainer">
                {
                  service.map((el)=>{
                    return <Service info={el}/>
                  })
                }
              </div>
          </div>
          
        </div>
        <IndividualIntervalsExample></IndividualIntervalsExample>
        <div className='SecondContainer'>
          <div className='SecondPanel'>
            <div className='SecondPanelContaoner'>
                <span className='GreetingText6'>Преимущества работы с нами:</span>
                <div className='SecondGridContainer'>
                  {
                    advantages.map((el)=>{
                      return <div className='GridElem'>
                              <div className='GridElemContainer'>
                                <img src={el.img}></img>
                                <span className='GridElemText'>{el.description}</span>
                              </div>                               
                            </div>
                    })
                  }
                </div>
            </div>
          </div>
          <div className='ThirdPanel'>
            <img src={MainPageSource1} alt="" className='ThirdPanelLeftPart'></img>
            <div className='ThirdPanelRightPart'>
              <span className='GreetingText6'>Наша история</span>
              <span className='GreetingText5'>
                Наша компания начала свой путь в 2022 году, когда группа инженеров-гидротехников объединилась с идеей предоставлять качественные услуги, развивать отрасль и двигать технический прогресс вперёд.
                <br/> <br/>
                К моменту создания, наши специалисты, выходцы из аккредитованной лаборатории, накопили уже солидный опыт, охватывающий более 300 объектов, включая плотины и дамбы, шлюзы и причалы, расположенные по всей территории России.
                Все наши специалисты имеют профильное высшее образование.
                <br/> <br/>
                Опыт работы в аккредитованном центре, а также желание развивать и продвигать транспортную отрасль вперёд, позволили быстро определиться с основным направлением деятельности - обследования гидротехнических сооружений.
                <br/> <br/>
                Мы работаем со всеми видами ГТС в любой точке страны, гарантируем качественную работу и индивидуальный подход.
                Проводим консультации по документации и освидетельствованиям, а также сопровождаем в регистрации декларации соответствия.
                <br/> <br/>
              </span>
              <span className='GreetingText4'>Свяжитесь с нами и мы ответим на любые Ваши вопросы!</span>
              <button className="SecondaryButton Mm">ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
          </div>
        </div>
        <div className='DocsContainer'>
          <div className='SecondContainerItem'>
            <span className='DocsTittleText'>Разрешительные документы</span>
            <div className='DocsArea'>
              <img src={Doc1} alt=""></img>
              <img src={Doc2} alt=""></img>
              <img src={Doc3} alt=""></img>
            </div>
          </div>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;

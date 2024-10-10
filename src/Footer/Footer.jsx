import "../MainPage/MainPage.css"
import "./Footer.css"
import "../Header/Header.css"
import Logo from "../ImageSource/Logo.svg"

import React, { useState } from 'react';

function Footer() {
  return (
    <footer className="Footer">
        <div className="FoterContainer">
            <div className="FirstFooterRow">
                <div className="FoterColumn">
                    <img className='FooterLogo' src={Logo} alt=""></img>
                    <span className="FooterText6">info@mig-spb.com</span>
                    <span className="FooterText7">+7 (951) 656 6822</span>
                    <span className="FooterText1">Генеральный директор<br/>
                    Косенко Роман Андреевич</span>
                </div>
                <div className="FoterColumn">
                    <span className="FooterText2">Услуги</span>
                    <span className="FooterText4">Обследование ГТС</span>
                    <span className="FooterText4">Геодезический мониторинг</span>
                    <span className="FooterText4">Научные исследования</span>
                    <span className="FooterText4">Проектирование</span>

                </div>
                <div className="FoterColumn">
                    <span className="FooterText2">О компании</span>
                    <span className="FooterText4">О нас</span>
                    <span className="FooterText4">Документы</span>
                    <span className="FooterText4">Контакты</span>
                    <span className="FooterText4">Отзывы</span>
                </div>
            </div>
            <div className="SecondFooterRow">
                <span className="FooterText5">190020, г. Санкт-Петербург, вн.тер.г. муниципальный округ Екатерингофский, ул. Лифляндская, д. 6, литера Д, пом. 27-Н, офис 409</span>
                <span className="FooterText5">ИНН 7838106706, КПП 783801001, ОГРН 1227800093630</span>
            </div>
        </div>        
    </footer>
  );
}

export default Footer;

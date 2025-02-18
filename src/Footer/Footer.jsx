import "../MainPage/MainPage.css"
import "./Footer.css"
import "../Header/Header.css"
import Logo from "../ImageSource/LogoMig.svg"

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <footer className="Footer">
        <div className="FoterContainer">
            <div className="FirstFooterRow">
                <div className="FoterColumn">
                    {/* <img className='FooterLogo' src={Logo} alt=""></img> */}
                    <Link to="/">
                        <img className='FooterLogo' src={Logo} alt=""></img>
                        {/* <img className='Logo' src={Logo} alt=""></img> */}
                    </Link>
                    <a 
                        className="link active FooterText6"
                        href="mailto:info@mig-spb.com"
                    >info@mig-spb.com</a>
                    <a 
                        className="link active FooterText7"
                        href="tel:+79516566822"
                    >+7 (951) 656 6822</a>
                    <span className="FooterText1">Генеральный директор<br/>
                    Косенко Роман Андреевич</span>
                </div>
                <div className="FoterColumn">
                    <span className="FooterText2">Услуги</span>
                     <Link className='link active FooterText4'  to='/examination'>Обследование ГТС</Link>
                     <Link className='link active FooterText4'  to='/monitoring'>Геодезический мониторинг</Link>
                     <Link className='link active FooterText4'  to='/research'>Научные исследования</Link>
                     <Link className='link active FooterText4'  to='/design'>Проектирование</Link>
                    {/* <span className="FooterText4">Обследование ГТС</span>
                    <span className="FooterText4">Геодезический мониторинг</span>
                    <span className="FooterText4">Научные исследования</span>
                    <span className="FooterText4">Проектирование</span> */}

                </div>
                <div className="FoterColumn">
                    <span className="FooterText2">О компании</span>
                    <HashLink className='link active FooterText4' to="/#history">О нас</HashLink>
                    <HashLink className='link active FooterText4' to='/#docs'>Документы</HashLink>
                    <a 
                        className="link active FooterText4"
                        href="tel:+79516566822"
                    >Контакты</a>
                </div>
            </div>
            <div className="SecondFooterRow">
                <a className="link active FooterText5" target="_blank" href="https://yandex.ru/maps/?pt=30.271932,59.903936&z=18&l=map">190020, г.&#160;Санкт-Петербург, вн.тер.г.&#160;муниципальный округ Екатерингофский, ул.&#160;Бумажная, д.&#160;3, литера&#160;А,&#160;пом.&#160;1-Н, офис&#160;609</a>
                <span className="FooterText5">ИНН&#160;7838106706, КПП&#160;783801001, ОГРН&#160;1227800093630</span>
            </div>
        </div>        
    </footer>
  );
}

export default Footer;

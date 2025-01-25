import './Header.css';
import Logo from "../ImageSource/LogoMig.svg"
import Burger from "../ImageSource/Burger.svg"
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [buttonState,setButtonState] = useState([
        {
            "name" : "Обследования ГТС",
            "link" : "/examination"
        },
        {
            "name" : "Геодезический мониторинг",
            "link" : "/monitoring"
        },
        {
            "name" : "Научные исcледования",
            "link" : "/research"
        },
        {
            "name" : "Проектирование",
            "link" : "/design"
        },
    ])

    window.onscroll = function() {
        var header = document.getElementsByClassName('Header')[0];
        var stickyOffset = window.innerWidth > 1200 ? 55 : 30;
    
        if (window.scrollY > stickyOffset) {
            header.style.top = 0; // Теперь он будет зафиксирован!
        } else {
            console.log(`${stickyOffset}px`)
            header.style.top = `${stickyOffset}px`; // И снова в исходное положение
        }
        };
        useEffect(()=>{
            var header = document.getElementsByClassName('Header')[0];
            var stickyOffset = window.innerWidth > 1200 ? 55 : 30;
            header.style.top = `${stickyOffset}px`; 
        },[])
    
    
  return (
    <header className="Header">
        <Link to="/">
            <img className='Logo' src={Logo} alt=""></img>
        </Link>
        <div className='RightPartHeader'>
            {
              buttonState.map((el)=>{
               return <button className='HeaderButton' key={el.link}>
                        <Link className={el.link.length > 1 ? 'link active' : 'link'} to={el?.link}>{el.name}</Link>
                      </button>
              })  
            }
            <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

            <ul className="menu__box">
            {
              buttonState.map((el)=>{
               return <li key={el.name}>
                        <a className="menu__item" href={el?.link}>{el.name}</a>
                     </li>
                        {/* <Link className={el.link.length > 1 ? 'link active' : 'link'} to={el?.link}>{el.name}</Link> */}
                   
              })  
            }
            </ul>
        </div>
            {/* <button className='BurgerButton'><img className='BurgerImg' src={Burger}></img></button> */}
        </div>
        







    </header>
  );
}

export default Header;
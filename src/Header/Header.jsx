import './Header.css';
import Logo from "../ImageSource/LogoMig.svg"
import Burger from "../ImageSource/Burger.svg"
import React, { useState } from 'react';
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
            <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

            <ul class="menu__box">
            {
              buttonState.map((el)=>{
               return <li><a class="menu__item" href={el?.link}>{el.name}</a></li>
                        {/* <Link className={el.link.length > 1 ? 'link active' : 'link'} to={el?.link}>{el.name}</Link> */}
                   
              })  
            }
                {/* <li><a class="menu__item" href="#">Home</a></li>
                <li><a class="menu__item" href="#">About</a></li>
                <li><a class="menu__item" href="#">Team</a></li>
                <li><a class="menu__item" href="#">Contact</a></li>
                <li><a class="menu__item" href="#">Twitter</a></li> */}
            </ul>
        </div>
            {/* <button className='BurgerButton'><img className='BurgerImg' src={Burger}></img></button> */}
        </div>
        







    </header>
  );
}

export default Header;
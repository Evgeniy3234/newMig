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
        <img className='Logo' src={Logo} alt=""></img>
        <div className='RightPartHeader'>
            {
              buttonState.map((el)=>{
               return <button className='HeaderButton' key={el.link}>
                        <Link className={el.link.length > 1 ? 'link active' : 'link'} to={el?.link}>{el.name}</Link>
                      </button>
              })  
            }
            <button className='BurgerButton'><img className='BurgerImg' src={Burger}></img></button>
        </div>
    </header>
  );
}

export default Header;
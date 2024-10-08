import './Header.css';
import Logo from "../ImageSource/Logo.svg"
import React, { useState } from 'react';

function Header() {

    const [buttonState,setButtonState] = useState([
        {
            "name" : "О нас",
            "link" : ""
        },
        {
            "name" : "обследования ГТС",
            "link" : ""
        },
        {
            "name" : "Геодезический мониторинг",
            "link" : ""
        },
        {
            "name" : "Научные исcледования",
            "link" : ""
        },
        {
            "name" : "Проектирование",
            "link" : ""
        },
    ])
    
  return (
    <header className="Header">
        <img className='Logo' src={Logo} alt=""></img>
        <div className='RightPartHeader'>
            {
              buttonState.map((el)=>{
               return <button className='HeaderButton'>{el.name}</button>
              })  
            }
        </div>
    </header>
  );
}

export default Header;
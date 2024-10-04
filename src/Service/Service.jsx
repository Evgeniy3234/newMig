import './Service.css';
import Arrow from "../ImageSource/ControlArrow.svg"
import React, { useEffect } from 'react';

function Service({info}) {

  return (
        <div className='Service'>
            <div className='LeftPartService'>
              <span className='ServieTitile'>{info.name}</span>
              <span className='ServieDescription'>{info.description}</span>
            </div>
            <div className='RightPartService'>
              <img src={Arrow} className='ControlArrow' alt="" ></img>
            </div>
        </div>
  );
}

export default Service;

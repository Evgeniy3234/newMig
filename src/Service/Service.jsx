import './Service.css';
import Arrow from "../ImageSource/ControlArrow.svg"
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Service({info}) {

  return (
        <Link className='Service' to={info.link}>
            <div className='LeftPartService'>
              <span className='ServieTitile'>{info.name}</span>
              <span className='ServieDescription'>{info.description}</span>
            </div>
            {/* <div className='RightPartService'>
              <img src={Arrow} className='ControlArrow' alt="" ></img>
            </div> */}
        </Link>
 
  );
}

export default Service;

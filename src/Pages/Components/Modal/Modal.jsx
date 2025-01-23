
import './Modal.css';
import React, { useState } from 'react';
import Triangle from '../../../ImageSource/Triangle.svg'
//! onClick={() => SetActive(false)} добавить в "Modal activeModal" что бы закрывалось по нажатию на темную часть

function Modal({active,Setactive}) {

  let source = [
    'Ваш запрос – краткое описание задачи',
    'Тип сооружения, местоположение и основные габариты',
    'При наличии прикрепить основные чертежи проектной/рабочей документации, Паспорт ГТС, эксплуатационную документацию (данные визуальных и инструментальных наблюдений за сооружением), данные по промерам глубин, тралению',
    'Ожидаемые сроки выполнения работ',
    'ФИО ответственного лица, e-mail и телефон'
  ]

  return (
    <div className={ active ? "Modal activeModal": "Modal"} onClick={() => Setactive(false)} >
        <div className="ModalMinContainer" onClick={e => e.stopPropagation()}>
          <div className='ContentModal'>
            <div className='modalPreHeader Fl-row-e-e'>
              <div className='preHeaderModalElement'></div>
            </div>
            <div className='modalContainer'>
                <div className='modalHeader'>
                  <span className='modalTittle'>Заявка</span>
                  <span className='modalDescription'>Для формирования КП необходимы следующие данные:</span>
                </div>
                <div className='PartsThirdComp'>
                  {
                      source?.map(ell => 
                              <div className='Fl-row-s-s gap15' key={ell}>
                                  <img className='partImg2' src={Triangle} alt=''></img>
                                  <span className='fw ThirdPartFPartDescription'>{ell}</span>
                              </div>
                      )
                  }
                </div>
                <button className="PrimaryButton butonMotalMargin">ОСТАВИТЬ ЗАЯВКУ</button>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Modal;

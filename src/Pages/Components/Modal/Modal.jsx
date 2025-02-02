
import './Modal.css';
import Triangle from '../../../ImageSource/Triangle.svg'
import CloseSvg from '../../../ImageSource/CloseBlue.svg'

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
              <button className='preHeaderModalElement' onClick={()=>{Setactive(!active)}}>

              {/* <button className='CloseButton2' onClick={()=>{Setactive(!active)}}> */}
                  <img className='CloseImg2' src={CloseSvg} alt=''></img>
                {/* </button> */}

              </button>
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
                <a 
                  className="PrimaryButton butonMotalMargin"
                  href="mailto:info@mig-spb.com"
                >ОСТАВИТЬ ЗАЯВКУ
                </a>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Modal;

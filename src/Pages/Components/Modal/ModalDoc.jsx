
import './Modal.css';
import CloseSvg from '../../../ImageSource/Close.svg'

function Modal({active,Setactive,Source}) {

  return (
    <div className={ active ? "Modal activeModal": "Modal"} onClick={() => Setactive(false)} >
        <div className="ModalMinContainerDoc">
          <div className='ContentModal' onClick={e => e.stopPropagation()}>
            <div className='modalContainerDoc'>
              <div className='docHeader'> 
                <button className='CloseButton2' onClick={()=>{Setactive(!active)}}>
                  <img className='CloseImg2' src={CloseSvg} alt=''></img>
                </button> 
              </div> 
              <iframe src={Source} alt="" className='DocImgDoc' type="application/pdf" ></iframe >
            </div>
          </div>
        </div>
    </div>
  );
}

export default Modal;

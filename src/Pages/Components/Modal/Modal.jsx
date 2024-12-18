
import './Modal.css';
//! onClick={() => SetActive(false)} добавить в "Modal activeModal" что бы закрывалось по нажатию на темную часть

function Modal({active,SetActive,children}) {
  return (
    <div className={ active ? "Modal activeModal": "Modal"} onClick={() => SetActive(false)} >
        <div className={active ? "ModalPhotoMinContainer123 activeModalContent" : "ModalPhotoMinContainer123"} 
          onClick={e => e.stopPropagation()}>
          <div className='ContentModal'>
            {children}
          </div>
        </div>
    </div>
  );
}

export default Modal;

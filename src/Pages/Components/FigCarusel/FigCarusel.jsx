import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import "./FigCarusel.css"
import Modal from "../../Components/Modal/Modal.jsx"
import React, { useState, useEffect} from 'react';

function FigCarusel({Source,isChild}) {

    const [active,Setactive] = useState(false)
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const myInterval = setInterval(() => {
        if(isChild){
            setIndex((prevInd) => prevInd > 1 ? 0 : prevInd + 1);
            console.log('index',index)   
        }
      }, 20000);
      // return () => clearInterval(myInterval);
    }, []);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

  return (
     <div className='FigCaruselBody custom_full_width'>
        <div className={Source.length > 1 ? 'FigCaruselСontainer custom_full_width' : 'indOff FigCaruselСontainer custom_full_width'}>
            <Carousel onSelect={handleSelect} activeIndex={index} slide={false} style={{maxHeight : "564px"}}>
                {
                    Source.map(el => 
                    <Carousel.Item interval={20000} style={{maxHeight : "564px",}}>
                        <div className='FigcaruselImgcontainer'>
                            <img src={el.img} className="d-block w-100 h-100 customn" alt=""/>
                        </div>
                        { el?.description.length ?
                            <div className='FigCarDescription'> 
                                <span className='FigCarDescriptionText'>{el.description}</span>
                            </div> : <></>
                        }
                    </Carousel.Item>
                )
                }
                
            </Carousel>
            { 
                isChild ? 
                    <div className='Fl-col-e-s ExDescCont childOption'>
                        <span className='ExDescTitle'>{Source[index].child}</span>
                        <button className="PrimaryButton" onClick={()=>{Setactive(true)}}>ОСТАВИТЬ ЗАЯВКУ</button>
                    </div>
                    : 
                    <></>
            }
        </div>
        <Modal active={active} Setactive={Setactive}></Modal>
    </div>
  );
}

export default FigCarusel;
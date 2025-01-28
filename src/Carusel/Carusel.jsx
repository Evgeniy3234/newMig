import Carousel from 'react-bootstrap/Carousel';
import CaruselSource1 from "../ImageSource/CaruselSource1.jpg"
import CaruselSource2 from "../ImageSource/CaruselSource2.jpg"
import CaruselSource3 from "../ImageSource/CaruselSource3.jpg"
import CaruselSource4 from "../ImageSource/CaruselSource4.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import "./Carusel.css"
import React, { useState, useEffect} from 'react';

function IndividualIntervalsExample() {

    let arr = [
        CaruselSource1,
        CaruselSource2,
        CaruselSource3,
        CaruselSource4
    ]

     const [index, setIndex] = useState(0);
    
        useEffect(() => {
          const myInterval = setInterval(() => {
                setIndex((prevInd) => prevInd > 2 ? 0 : prevInd + 1);
          }, 20000);
          // return () => clearInterval(myInterval);
        }, []);
    
        const handleSelect = (selectedIndex) => {
            setIndex(selectedIndex);
        };

  return (
    <div className='Caruselcontainer'>
        <Carousel onSelect={handleSelect} activeIndex={index} slide={false} style={{maxHeight : "750px"}}>
            {
                arr.map(el => 
                    <Carousel.Item interval={20000} style={{maxHeight : "750px"}}>
                        <div className='caruselImgcontainer'>
                            <img src={el} className="d-block w-100 h-100 customn" alt=""/>
                        </div>
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
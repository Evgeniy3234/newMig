import Carousel from 'react-bootstrap/Carousel';
import CaruselSource1 from "../ImageSource/CaruselSource1.jpg"
import CaruselSource2 from "../ImageSource/CaruselSource2.jpg"
import CaruselSource3 from "../ImageSource/CaruselSource3.jpg"
import CaruselSource4 from "../ImageSource/CaruselSource4.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import "./Carusel.css"
function IndividualIntervalsExample() {
  return (
    <div className='Caruselcontainer'>
        <Carousel style={{maxHeight : "750px"}}>
        <Carousel.Item interval={2000} style={{maxHeight : "750px"}}>
            <div className='caruselImgcontainer'>
                <img src={CaruselSource1} className="d-block w-100 h-100 customn" alt=""/>
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} style={{maxHeight : "750px"}}>
            <div className='caruselImgcontainer'>
                <img src={CaruselSource2} className="d-block w-100 h-100" alt=""/>
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} style={{maxHeight : "750px"}}>
            <div className='caruselImgcontainer'>
                <img src={CaruselSource3} className="d-block w-100 h-100" alt=""/>
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} style={{maxHeight : "750px"}}>
            <div className='caruselImgcontainer'>
                <img src={CaruselSource4} className="d-block w-100 h-100" alt=""/>
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
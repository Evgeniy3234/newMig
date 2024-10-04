import Carousel from 'react-bootstrap/Carousel';
import Source1 from "../ImageSource/CaruselSource1.png"
import 'bootstrap/dist/css/bootstrap.css';
import "./Carusel.css"
function IndividualIntervalsExample() {
  return (
    <div className='Caruselcontainer'>
        <Carousel>
        <Carousel.Item interval={2000}>
            <img src={Source1} className="d-block w-100" alt=""/>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img src={Source1} className="d-block w-100" alt=""/>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img src={Source1} className="d-block w-100" alt=""/>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
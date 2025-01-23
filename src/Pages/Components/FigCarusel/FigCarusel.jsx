import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import "./FigCarusel.css"
function FigCarusel({Source}) {
  return (
    <div className='FigCaruselСontainer custom_full_width '>
        <Carousel slide={false} style={{maxHeight : "564px"}}>
            {
                Source.map(el => 
                <Carousel.Item interval={2000} style={{maxHeight : "564px"}}>
                    <div className='FigcaruselImgcontainer'>
                        <img src={el.img} className="d-block w-100 h-100 customn" alt=""/>
                    </div>
                    { el?.description.length &&
                        <div className='FigCarDescription'> 
                            <span className='FigCarDescriptionText'>{el.description}</span>
                        </div>
                    }
                </Carousel.Item>)
            }
        </Carousel>
    </div>
  );
}

export default FigCarusel;
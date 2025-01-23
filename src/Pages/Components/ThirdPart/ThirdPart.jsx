import '../../../Main.css';
import "./ThirdPart.css"
import Triangle from '../../../ImageSource/Triangle.svg'


function ThirdPart({source}) {

    console.log('source?.parts',source.parts)
    return (
    <div className='ThirdPartContainer'>
        <div className='ThirdPartImgContainer'>
            <img src={source.img} className="ThirdPartImg" alt=""/>
        </div>
        <div className='ThirdPartPartsContainer'>
            <span className='ThirdPartTittle'>Нормативная база</span>
             <div className='PartsThirdComp'>
            {
                source?.parts?.map(ell => 
                        <div className='Fl-row-s-s gap15' key={ell}>
                            <img className='partImg2' src={Triangle} alt=''></img>
                            <span className='ThirdPartFPartDescription'>{ell}</span>
                        </div>
                )
            }
            </div>
        </div>
    </div>
)}

export default ThirdPart;
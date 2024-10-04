import './InfoLine.css';
import Adres from "../ImageSource/Adres.svg"
import Phone from "../ImageSource/Phone.svg"

function InfoLine() {

  return (
    <header className="InfoLineContainer">
        <div className='InfoLineItemStart'>
            <img src={Adres} alt="" className='InfoLineImg'></img>
            <span className='InfoLineSpan'>г. Санкт-Перебург</span>
        </div>
        <div className='InfoLineItemEnd'>
            <img src={Phone} alt="" className='InfoLineImg'></img>
            <span className='InfoLineSpan'>+7 (951) 656 6822</span>
        </div>
    </header>
  );
}

export default InfoLine;
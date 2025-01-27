import './InfoLine.css';
import Adres from "../ImageSource/Adres.svg"
import Phone from "../ImageSource/Phone.svg"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../Main.css'

function InfoLine() {

  return (
    <header className="Fl-row-e-c InfoLineContainer">
        <HashLink className='link active InfoLineLink' to="/#history">О нас</HashLink>
        <HashLink className='link active InfoLineLink' to='/#docs'>Лицензии</HashLink>
        <div className='Fl-row-c-c'>
            <img src={Adres} alt="" className='InfoLineImg'></img>
            <span className='InfoLineSpan'>г. Санкт-Перебург</span>
        </div>
        <div className='Fl-row-c-c InfoLineItemEnd'>
            <img src={Phone} alt="" className='InfoLineImg'></img>
            <a 
                        className="link active InfoLineSpan"
                        href="tel:+79516566822"
                    >+7 (951) 656 6822</a>
        </div>
    </header>
  );
}

export default InfoLine;
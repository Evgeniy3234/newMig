import './Content.css';
import Adres from "../../../ImageSource/Adres.svg"
import Phone from "../../../ImageSource/Phone.svg"
import { Link } from 'react-router-dom';
import '../../../Main.css'

function SendMessage({mail}) {

  return (
    <header className="Fl-row-e-c InfoLineContainer">
        <Link className='link active InfoLineLink'>О нас</Link>
        <Link className='link active InfoLineLink'>Лицензии</Link>
        <div className='Fl-row-c-c'>
            <img src={Adres} alt="" className='InfoLineImg'></img>
            <span className='InfoLineSpan'>г. Санкт-Перебург</span>
        </div>
        <div className='Fl-row-c-c InfoLineItemEnd'>
            <img src={Phone} alt="" className='InfoLineImg'></img>
            <span className='InfoLineSpan'>+7 (951) 656 6822</span>
        </div>
    </header>
  );
}

export default SendMessage;
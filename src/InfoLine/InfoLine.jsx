import './InfoLine.css';
import Adres from "../ImageSource/Adres.svg"
import Phone from "../ImageSource/Phone.svg"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../Main.css'

function InfoLine() {
  return (
    <header className="Fl-row-e-c InfoLineContainer">
      <div className='InfoLineLeft'>
        <HashLink className='link active InfoLineLink InfoLineLinkLeft' to="/#history">О нас</HashLink>
        <HashLink className='link active InfoLineLink' to='/#docs'>Лицензии</HashLink>
      </div>
      <div className='InfoLineRight'>
        <div className='Fl-row-c-c InfoLineItemStart'>
            <img src={Adres} alt="" className='InfoLineImg'></img>
            {
              window.innerWidth > 1200 ? <a className='link active InfoLineSpan' target="_blank" href="https://yandex.ru/maps/?pt=30.271932,59.903936&z=18&l=map">г.Санкт-Петербург, ул.Бумажная,3</a> 
              : 
              <a className='link active InfoLineSpan' target="_blank" href="https://yandex.ru/maps/?pt=30.271932,59.903936&z=18&l=map">г. Санкт-Петербург</a>
            }
        </div>
        <div className='Fl-row-c-c InfoLineItemEnd'>
            <img src={Phone} alt="" className='InfoLineImg'></img>
            <a 
                        className="link active InfoLineSpan"
                        href="tel:+79516566822"
                    >+7 (951) 656 6822</a>
        </div>
      </div>
    </header>
  );
}

export default InfoLine;
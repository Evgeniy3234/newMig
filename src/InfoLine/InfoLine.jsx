import './InfoLine.css';
import Adres from "../ImageSource/Adres.svg"
import Phone from "../ImageSource/Phone.svg"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../Main.css'

function InfoLine() {
// target="_blank" href="https://yandex.ru/maps/?pt=30.271932,59.903936&z=18&l=map"
//190020, г.&#160;Санкт-Петербург, вн.тер.г.&#160;муниципальный округ Екатерингофский, ул.&#160;Бумажная, д.&#160;3, литера&#160;А,&#160;пом.&#160;1-Н, офис&#160;609
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
              window.innerWidth > 1200 ? <a className='link active InfoLineSpan' target="_blank" href="https://yandex.ru/maps/?pt=30.271932,59.903936&z=18&l=map">г.Санкт-Петербург, ул.Бумажная, д.3, лит.А, пом.1-Н, офис 609</a> 
              : 
              <a className='link active InfoLineSpan'>г. Санкт-Перебург</a>
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
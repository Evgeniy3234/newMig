import '../../../../Main.css';
import "../SecondPart.css"
import Triangle from '../../../../ImageSource/Triangle.svg'
import {useEffect, useRef,useState} from 'react'
import {syncRefHeight} from '../../Hooks/useSyncRefHeight'

function Card({source}) {

    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    const fLine = useRef(null);
    const sLine = useRef(null);

    useEffect(() => {
        const resizeHandler = () => setSize([window.innerWidth, window.innerHeight]);
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
      }, []);

    useEffect(()=>{
            syncRefHeight(
                [
                  ['SecondPartFPart', fLine],
                //   ['PartsSeconComp', sLine],
                ],
                // trigger hook when items of footerItems changes, since it may change height
                [source],
              );
    },[size])

    return ( 

        <div className='SecondPart' key={source.name}>
            <div className='SecondPartFPart' ref={fLine}>
                <span className='SecondPartFPartName'>{source.name}</span>
                {   source?.description &&
                    <span className='SecondPartFPartDescription'>{source.description}</span>
                }
            </div>
            {
                source.hasOwnProperty('parts') &&
                    <div className='PartsSeconComp' ref={sLine}>
                        
                        {
                            source?.parts?.map(ell =>
                                
                                { return  ell[0] === '*' ? 
                                    <div className='Fl-row-s-s' key={ell}>
                                        <span className='SecondPartFPartDescription partSpan1'>{ell[0]}</span>
                                        <span className='SecondPartFPartDescription partSpan'>{ell.slice(1)}</span>
                                    </div> 
                                        : 
                                    <div className='Fl-row-s-s' key={ell}>
                                        <img className='partImg' src={Triangle} alt=''></img>
                                        <span className='SecondPartFPartDescription partSpan'>{ell}</span>
                                    </div>
                                }
                            )
                        }
                    </div>
            }
    </div> 
)}

export default Card;
import '../../../Main.css';
import "./SecondPart.css"
import Card from './Card/Card'
import SmallCard from './SmallCard/SmallCard';
import {useEffect,useRef,useState} from 'react'
import {syncRefHeight} from '../Hooks/useSyncRefHeight'

function SecondPart({source,options}) {

    const [size, setSize] = useState(window.innerWidth);
    const SmallCardRef = useRef(null);

    useEffect(() => {
        const resizeHandler = () => setSize(window.innerWidth);
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
      }, []);
    return (
        <div className='SecondPartComponent'>
            <div className={
                (source[0].hasOwnProperty('description') || source[0].hasOwnProperty('parts')) ? 
                    'SecondPartComponentContainer'
                    :
                    'GridSecondPartContainer'
                }>
                {
                    source.map(el =>
                        size > 800 ?
                        <Card source={el}></Card>
                        :
                        <SmallCard source={el} ref={SmallCardRef}></SmallCard>
                    ) 
                }
            </div>
            {
                options &&
                <>
                    <span className='SecondPartTittleDescription'>{options?.description}</span>
                    <button className="PrimaryButton MarginTop">ОСТАВИТЬ ЗАЯВКУ</button>
                </>
            }
        </div>
)}

export default SecondPart;
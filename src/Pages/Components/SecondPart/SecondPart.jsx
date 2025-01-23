import '../../../Main.css';
import "./SecondPart.css"
import Card from './Card/Card'
import SmallCard from './SmallCard/SmallCard';
import {useEffect,useRef,useState} from 'react'
import {syncRefHeight} from '../Hooks/useSyncRefHeight'
import Modal from "../../Components/Modal/Modal.jsx"

function SecondPart({source,options}) {

    const [active,Setactive] = useState(false)

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
                    <button className="PrimaryButton MarginTop" onClick={()=>{Setactive(true)}}>ОСТАВИТЬ ЗАЯВКУ</button>
                </>
            }
            <Modal active={active} Setactive={Setactive}></Modal>
        </div>
)}

export default SecondPart;
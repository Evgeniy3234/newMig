import '../../../../Main.css';
import "../SecondPart.css"
import './SmallCard.css'
import Triangle from '../../../../ImageSource/Triangle.svg'
import Arrow from "../../../../ImageSource/ControlArrow.svg"
import {useEffect, useRef,useState} from 'react'
import {syncRefHeight} from '../../Hooks/useSyncRefHeight'

function SmallCard({source}) {
    const [isOpen, setIsOpen] = useState(false)

    return ( 
        <div className='SmallCard' onClick={()=>setIsOpen(!isOpen)}>
            <div className='SmallCardContainer Gap20'>
                <div className='Fl-col-s-s Gap10'>
                    <span className='SmCName'>{source.name}</span>
                    {   source?.description &&
                            <span className='SmcDescription'>{source.description}</span>
                    }
                </div>
                { source?.description &&
                    <img src={Arrow} className={isOpen ? 'ArrowRotate90' : 'ControlArrow'} alt="" ></img>
                }
            </div>
            {
                isOpen && source.hasOwnProperty('parts') ? 
                <div className='SmallCardOptions'>
                    {
                        source.parts.map(ell =>
                            
                            { return  ell[0] === '*' ? 
                                <div className='Fl-row-s-s' key={ell}>
                                    <span className='SmapCardLIOptions partSpan1'>{ell[0]}</span>
                                    <span className='SmapCardLIOptions partSpan'>{ell.slice(1)}</span>
                                </div> 
                                    : 
                                <div className='Fl-row-s-s' key={ell}>
                                    <img className='partImg' src={Triangle} alt=''></img>
                                    <span className='SmapCardLIOptions partSpan'>{ell}</span>
                                </div>
                            }
                        )
                    }
                </div> 
                :
                <div className='fakeMargin22'></div> 
            }
        </div>
)}

export default SmallCard;
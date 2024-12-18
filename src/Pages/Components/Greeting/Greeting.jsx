import './Greeting.css';
import '../../../Main.css';

function Greeting({FirstPart,SecondPart}) {

  return (
    <div className='GreetingComp'>
        <span className='FSpnGrComp'>{FirstPart}</span>
        <span className='SSpnGrComp'>{SecondPart}</span>
    </div>
  );
}

export default Greeting;
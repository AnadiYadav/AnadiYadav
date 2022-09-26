import './App.css';
import CardsExample from './CardsExample';
import Navigation from './Navigation';
import MyCarousel from './MyCarousel';
import {Browserrouter as Router,Routes,Route} from 'react-bootstrap';


function App() {
  return (
    <div> 

    <Navigation></Navigation>          
          
          
           
          <MyCarousel></MyCarousel>
          <h1><b><i><u>Taekwondo Assosciation,</u><u> Jaipur</u></i></b></h1>
          <h3><i>Our Services :</i></h3>
          <CardsExample></CardsExample>
    </div>
  );
}

export default App;

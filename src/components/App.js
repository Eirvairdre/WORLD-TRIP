import {ReactComponent as Map} from '../assets/world.svg';
import './App.css';
import Chart from '../Chart';

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <div className="header">
                <h1>WORLD·TRIP</h1>
            </div>
            <div className="content">
                {/*<Chart  />*/}
                <Map className="map" width="90%" heiht="90%" />
            </div>
        </div>
    </div>
  );
}

export default App;

import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Registration from "./authentication/Registraition";
import Login from './authentication/Login';
import {ReactComponent as Map} from '../assets/world.svg';
import {ReactComponent as NA} from '../assets/north_america.svg';
import {ReactComponent as SM} from '../assets/shared_map.svg';


function App() {
        return (
            <div className="App">
                <section className="Child">
                    <div className="FirstPage">
                        <p className='FPp'>WORLD·TRIP</p>
                        <div className='Registration'>
                            <Link to='registration' className='Reg_Btn'>
                                <p className='Reg_Txt'>CREATE YOUR MAP</p>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="Child">
                    <div className="SecondPage">
                        <h1>WORLD·TRIP</h1>
                        <h2>is</h2>
                        <p>
                            a solo project with which you can mark your trips around the world, write descriptions of
                            them and share them with friends and family.
                        </p>
                    </div>
                </section>
                <section className="Child">
                    <div className="ThirdPage">
                        <h1>Mark countries you’ve visited</h1>
                        <Map className="Map"/>
                    </div>
                </section>
                <section className="Child">
                    <div className="FourthPage">
                        <h1>Crop regions</h1>
                        <NA className="NA"/>
                    </div>
                </section>
                <section className="Child">
                    <div className="FifthPage">
                        <h1>Share your map with your friends</h1>
                        <SM className="SM"/>
                    </div>
                </section>
                <Routes>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>


)
    ;
}


export default App;
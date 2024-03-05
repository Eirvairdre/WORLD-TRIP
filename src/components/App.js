import {ReactComponent as Map} from '../assets/world.svg';
import {ReactComponent as NA} from '../assets/north_america.svg';
import {ReactComponent as SM} from '../assets/shared_map.svg';
import './App.css';
// import './navbar.css'
// import Chart from '../Chart';
// import Navbar from "./navbar";
import React, {useState} from "react";
// import React, {useState} from 'react';

const App = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className="App">
            <section className="Child">
                <div className="FirstPage">
                    {/* eslint-disable-next-line no-restricted-globals */}
                    <div className="container" onClick={console.log('aaa')}>
                        <nav>
                            <div className="btn">
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                            </div>
                        </nav>
                    </div>

                    <p>WORLD·TRIP</p>
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
        </div>
    );
}

export default App;

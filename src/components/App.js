import {ReactComponent as Map} from '../assets/world.svg';
import {ReactComponent as NA} from '../assets/north_america.svg';
import {ReactComponent as SM} from '../assets/shared_map.svg';
import './App.css';
import Chart from '../Chart';
import Navbar from "./navbar";
import React, {useState} from 'react';

function App() {



    return (
        <div className="App">
            <div className="FirstPage">
                <Navbar />
                <p>WORLD·TRIP</p>
            </div>
            <div className="SecondPage">
                <h1>WORLD·TRIP</h1>
                <h2>is</h2>
                <p>
                    a solo project with which you can mark your trips around the world, write descriptions of them and share them with friends and family.
                    </p>
            </div>
            <div className="ThirdPage">
                <h1>Mark countries you’ve visited</h1>
                <Map className="Map" />
            </div>
            <div className="FourthPage">
                <h1>Crop regions</h1>
                <NA className="NA"/>
            </div>
            <div className="FifthPage">
                <h1>Share your map with your friends</h1>
                <SM className="SM"/>
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import BurgerMenu from '../BurgerMenu';
import WorldMap from '../WorldMap';

const Home = () => {
    return (
        <div className="home-page">
            <p className='WT'>WORLD·TRIP</p>
            <WorldMap />
        </div>
    );
};

export default Home;

import React from 'react';
import './home.css';
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

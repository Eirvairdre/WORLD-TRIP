import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Создайте этот CSS-файл для стилизации
import {ReactComponent as Map} from '../../assets/world.svg';

const Home = () => {
    return (
        <div className="home-page">
            <div className="map-container">
                {/* Замените SVG_PATH на путь к вашему SVG файлу */}
                <Map />
                <div className="map-controls">
                    <button className="zoom-button">+</button>
                    <button className="zoom-button">-</button>
                    <button className="check-in-map">Check in on map</button>
                    <button className="check-in-here">Check in here</button>
                </div>
            </div>
            <div className="menu">
                <div className="profile">
                    <div className="avatar"></div>
                    <p className="username">username</p>
                </div>
                <Link to="/home" className="menu-item">
                    <span className="icon">🌍</span> My map
                </Link>
                <Link to="/" className="menu-item">
                    <span className="icon">👥</span> Friends
                </Link>
                <Link to="/" className="menu-item">
                    <span className="icon">⚙️</span> Settings
                </Link>
            </div>
        </div>
    );
}

export default Home;

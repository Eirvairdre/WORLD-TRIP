import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = () => {
    return (
        <Menu right>
            <div className="profile">
                <div className="avatar"></div>
                <p className="username">username</p>
            </div>
            <Link to="/map" className="menu-item">
                <span className="icon">🌍</span> My map
            </Link>
            <Link to="/friends" className="menu-item">
                <span className="icon">👥</span> Friends
            </Link>
            <Link to="/settings" className="menu-item">
                <span className="icon">⚙️</span> Settings
            </Link>
        </Menu>
    );
};

export default BurgerMenu;

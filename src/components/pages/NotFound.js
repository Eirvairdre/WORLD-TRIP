// src/components/NotFound.js
import React from 'react';
import styles from './NotFound.module.css';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The page was not found</h1>
            <p className={styles.description}>The page you are looking for does not exist.</p>
            <Link className={styles.button} to='/'>
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;

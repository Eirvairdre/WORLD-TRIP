import React, { useState } from "react";
import './Auth.css';
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Close } from '../../assets/Close.svg';
import Input from "../Input";

export default function Registration() {
    const [createName, setCreateName] = useState('');
    const [createEmail, setCreateEmail] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const [errors, setErrors] = useState({ name: false, email: false, password: false });

    const navigate = useNavigate(); // Использование useHistory для перенаправления

    const validation = () => {
        let valid = true;
        setErrors({ name: false, email: false, password: false }); // Сброс ошибок

        if (!createEmail) {
            handleError('пожалуйста, введите свой email', 'email');
            valid = false;
        } else if (!createEmail.match(/[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-z]+/)) {
            handleError('пожалуйста, введите корректный email', 'email');
            valid = false;
        } else if (!createEmail.match(/^[A-Za-z0-9@.]+$/)) {
            handleError('email должен содержать только латиницу и цифры', 'email');
            valid = false;
        }

        if (!createName) {
            handleError('пожалуйста, введите свое имя', 'name');
            valid = false;
        }

        if (!createPassword) {
            handleError('пожалуйста, введите свой пароль', 'password');
            valid = false;
        }

        if (createPassword.length < 5) {
            handleError('пароль должен содержать более 5 символов', 'password');
            valid = false;
        } else if (!createPassword.match(/^[A-Za-z0-9]+$/)) {
            handleError('пароль должен содержать только латиницу и цифры', 'password');
            valid = false;
        }

        if (valid) {
            // Если валидация прошла успешно, перенаправляем пользователя на домашнюю страницу
            navigate('/home');
        }
    };

    const handleError = (errorMessage, input) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    return (
        <div className='Registration_Page'>
            <div className='Return'>
                <Link to='/'>
                    <Close />
                </Link>
            </div>
            <div className='Container'>
                <p className='Container_'>Register</p>
                <Input
                    label={'Enter your name'}
                    onChange={e => setCreateName(e.target.value)}
                    error={errors.name}
                    onFocus={() => handleError(null, 'name')}
                />
                <Input
                    label={'Enter your email'}
                    onChange={e => setCreateEmail(e.target.value)}
                    error={errors.email}
                    onFocus={() => handleError(null, 'email')}
                />
                <Input
                    label={'Enter your password'}
                    onChange={e => setCreatePassword(e.target.value)}
                    password
                    type={passwordType}
                    onTypeChange={setPasswordType}
                    error={errors.password}
                    onFocus={() => handleError(null, 'password')}
                />
                <div className='cReg'>
                    <button className='cReg_Btn' onClick={validation}>
                        <p className='cReg_Txt'>Register</p>
                    </button>
                </div>
                <Link to='/login' className='toLogin'>
                    <p className='Btm_Txt'>
                        I already have account
                    </p>
                </Link>
            </div>
        </div>
    );
}

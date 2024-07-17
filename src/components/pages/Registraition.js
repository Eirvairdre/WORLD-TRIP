import React, { useState, useContext } from "react";
import './Auth.css';
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Close } from '../../assets/Close.svg';
import Input from "../Input";
import { AuthContext } from '../AuthContext';
import { signUpRequest, signInRequest,} from '../../api/auth';

export default function Registration() {
    const [createName, setCreateName] = useState('');
    const [createEmail, setCreateEmail] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const [errors, setErrors] = useState({ name: false, email: false, password: false });
    const [fail, setFail] = useState(false)

    const navigate = useNavigate(); // Использование useHistory для перенаправления
    const { login } = useContext(AuthContext);
    const handleLogin = () => {
        let valid = true;
        setErrors({ name: false, email: false, password: false }); // Сброс ошибок

        if (!createEmail) {
            handleError('Please, enter your email', 'email');
            valid = false;
        } else if (!createEmail.match(/[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]+/)) {
            handleError('Please, enter a valid email', 'email');
            valid = false;
        } else if (!createEmail.match(/^[A-Za-z0-9@._-]+$/)) {
            handleError('Email should contain only letters, numbers and special characters', 'email');
            valid = false;
        }

        if (!createName) {
            handleError('Please, enter your name', 'name');
            valid = false;
        } else if (createName.length < 1) {
            handleError('Your name should be longer than 2 letters', 'name');
            valid = false;
        }

        if (!createPassword) {
            handleError('Please, enter your password', 'password');
            valid = false;
        }

        if (createPassword.length < 6) {
            handleError('Your name should be longer than 5 letters', 'password');
            valid = false;
        } else if (!createPassword.match(/^[A-Za-z0-9]+$/)) {
            handleError('Your name should only consist of letters and numbers', 'password');
            valid = false;
        }
        if (valid) {
            register()
        }
    };

    // const validation = () => {
    //
    // };

    const register = async () => {
        try {
            // await signUpRequest(createName, createEmail, createPassword);
            await localStorage.setItem('@world-trip:name', createName);
            const r = await signUpRequest(createName, createEmail, createPassword);
            try {
                await localStorage.setItem('@world-trip:token', r.access_token);
                // console.log(r.access_token);
            } catch (err) {
                console.error(err);
            }
            // navigation.navigate('Slider');
            login();
            navigate('/home');
        } catch (err) {
            console.error(err);
            // setFail(true);
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
                    <button className='cReg_Btn' onClick={handleLogin}>
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


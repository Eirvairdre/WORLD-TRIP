import './Auth.css';
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { ReactComponent as Close } from '../../assets/Close.svg'
import Input from "../Input";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({email: false, password: false})
    const [passwordType, setPasswordType] = useState('password');
    const [fail, setFail] = useState(false);

    const navigate = useNavigate();

    const validation = async () => {
        let valid = true;
        if (!email) {
            handleError('пожалуйста, введите свой email', 'email');
            valid = false;
        } else if (!email.match(/[a-zA-z0-9._-]+@[a-z]+\.[a-z]+/)) {
            handleError('пожалуйста, введите корректный email', 'email');
            valid = false;
        }

        if (!password) {
            handleError('пожалуйста, введите свой пароль', 'password');
            valid = false;
        } else if (fail) {
            handleError('неверный логин или пароль', 'password');
        }

        if (valid) {
            // register();
            navigate('/home')
        }
    };

    const handleError = (errorMessage, input) => {
        setErrors(prevState => ({...prevState, [input]: errorMessage}));
    };

    return(
        <div className='Login_Page'>
            <div className='Return' >
                <Link to='/' >
                    <Close />
                </Link>
            </div>

            <div className='Container'>
                <p className='Container_'>Login</p>
                <Input
                    label={'Enter your email'}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                    onFocus={() => {
                        handleError(null, 'email');
                    }}
                />
                <Input
                    label={'Enter your password'}
                    onChange={(e) => setPassword(e.target.value)}
                    password
                    type={passwordType}
                    onTypeChange={setPasswordType}
                    error={errors.password}
                    onFocus={() => {
                        handleError(null, 'password');
                    }}
                />
                <div className='cReg'>
                    <button className='cReg_Btn' onClick={validation}>
                        <p className='cReg_Txt'>Sign in</p>
                    </button>
                </div>
                <Link to='/registation' className='toLogin'>
                    <p className='Btm_Txt'>
                        I don't have account
                    </p>
                </Link>
            </div>
        </div>
    );
}

import './Auth.css';
import React, {useState, useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import { ReactComponent as Close } from '../../assets/Close.svg'
import Input from "../Input";
import { AuthContext } from '../AuthContext';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({email: false, password: false})
    const [passwordType, setPasswordType] = useState('password');
    const [fail, setFail] = useState(false);

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleRegister = () => {
        console.log('start logging in')
        let valid = true;

        if (!email) {
            handleError('Please, enter your email', 'email');
            valid = false;
        } else if (!email.match(/[a-zA-z0-9._-]+@[a-z]+\.[a-z]+/)) {
            handleError('Please, enter a valid email', 'email');
            valid = false;
        }

        if (!password) {
            handleError('Please, enter your password', 'password');
            valid = false;
        } else if (fail) {
            handleError('Invalid username or password', 'password');
        } else if (!password.match(/^[A-Za-z0-9]+$/)) {
            handleError('Please, enter a valid password', 'password');
            valid = false;
        } else if (password.length < 6) {
            handleError('Your name should be longer than 5 letters', 'password');
            valid = false;
        }

        if (valid) {
            console.log('logged in')
            login(); // Устанавливаем состояние аутентификации в true
            navigate('/home', {replace: true}); // Перенаправляем на главную страницу
        }
    };

    //     const validation = async () => {
    //
    // };

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
                    <button className='cReg_Btn' onClick={handleRegister}>
                        <p className='cReg_Txt'>Sign in</p>
                    </button>
                </div>
                <Link to='/registration' className='toLogin'>
                    <p className='Btm_Txt'>
                        I don't have account
                    </p>
                </Link>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import './Errors.css';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const Input = ({ label, error, password, onFocus = () => {}, onChange, type, onTypeChange, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [icon, setIcon] = useState(type === 'password' ? eyeOff : eye);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            onTypeChange('text');
        } else {
            setIcon(eyeOff);
            onTypeChange('password');
        }
    };

    return (
        <div className='Errors'>
            <div className='InputWrapper'>
                <input
                    className='Input'
                    style={{ border: error ? '0.15em solid red' : isFocused ? '1px solid #161616' : '1px solid #161616' }}
                    {...props}
                    type={type}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={label}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    onChange={onChange}
                />
                {password && (
                    <span className="EyeIcon" onClick={handleToggle}>
                        <Icon icon={icon} size={35} />
                    </span>
                )}
            </div>
            <p className={`ErrorTxt ${error ? 'error-visible' : ''}`}>{error}</p>
        </div>
    );
};

export default Input;

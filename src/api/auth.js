import axios from "axios";
import baseUrl from './base';

const signUpRequest = async (name, email, password) => {
    const r = await axios.post(`${baseUrl}/register/`, {
        name: name,
        email: email,
        password: password,
    });

    if (r.status === 200) {
        return r.data;
    } else {
        throw Error('Почта уже существует');
    }
};

const signInRequest = async (username, password) => {
    const r = await axios.post(`${baseUrl}/login/`, {
        email: username,
        password: password,
    });
    if (r.status === 200) {
        return r.data;
    } else {
        throw Error('Неверный логин или пароль');
    }
};

export { signInRequest, signUpRequest}

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

const signInRequest = async (password, username) => {
    const r = await axios.post(`${baseUrl}/token`, {
        password: password,
        username: username,
    });
    if (r.status === 201) {
        return r.data;
    } else {
        throw Error('Неверный логин или пароль');
    }
};

// const deleteRequest = async token => {
//     const r = await axios.delete(`${baseUrl}/delete`, {
//         token: token,
//     });
//     if (r.status === 204) {
//         return r.data;
//     } else {
//         throw Error('Internal error');
//     }
// };
//
// const updateRequest = async (email, name, password) => {
//     const r = await axios.patch(`${baseUrl}/patch`, {
//         email: email,
//         name: name,
//         password: password,
//     });
//     if (r.status === 204) {
//         return r.data;
//     } else {
//         throw Error('Internal error');
//     }
// };
export { signInRequest, signUpRequest}

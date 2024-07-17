// File: countryUpdate.js
import axios from "axios";
import baseUrl from './base';

const colorUpdate = async (token, country_id, color) => {
    try {
        const response = await axios.put(`${baseUrl}/update_country_color/`, {
            token: token,
            id: country_id,
            color: color,
        });

        if (response.status === 200) {
            return response.data.detail;
        } else {
            throw new Error('Unexpected response status');
        }
    } catch (error) {
        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Status:', error.response.status);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        throw error;
    }
};

const getMap = async (token) => {
    try {
        const response = await axios.get(`${baseUrl}/get_svg_content/?token=${token}`);
        if (response.status === 200) {
            return response.data; // Возвращаем данные как строку SVG
        } else {
            throw new Error('Unexpected response status');
        }
    } catch (error) {
        console.error('Error fetching map:', error);
        throw error;
    }
}

const updateCountryComment = async (token, id, comment) => {
    try {
        const response = await axios.put(`${baseUrl}/update_country_comment/`, {
            token: token,
            id: id,
            comment: comment,
        });
        if (response.status === 200) {
            return response.data.detail;
        } else {
            throw new Error('Unexpected response status');
        }
    } catch (error) {
        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Status:', error.response.status);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        throw error;
    }
};

const getComment = async (token, id) => {
    try {
        const response = await axios.post(`${baseUrl}/get_country_comment/`,
            {
                token: token,
                id: id,
            });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Unexpected response status');
        }
    } catch (error) {
        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Status:', error.response.status);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        throw error;
    }
};

export { colorUpdate, getMap, updateCountryComment, getComment };

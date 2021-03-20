import api from './api';

export const registration = () => {
    return fetch(api.furniture)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};
import api from './api';

export const getAll = () => {
    return fetch(api.furniture)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};
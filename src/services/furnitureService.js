import api from './api';

export const getAll = () => {
    return fetch(api.furniture)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};

export const getOne = () => {
    return fetch(api.furniture)
            .then(res => res.json())
            .catch(err => console.log(err))
}

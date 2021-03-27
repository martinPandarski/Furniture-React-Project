import api from './api';

export const getAll = () => {
    return fetch(api.furniture)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};

export const getOne = (id) => {
    return fetch(`${api.furniture}/${id}`)
            .then(res => res.json())
            .catch(err => console.log(err))
}

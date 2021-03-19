import api from './api';

export const getHomeCards = () => {
    return fetch(api.homeCards)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};
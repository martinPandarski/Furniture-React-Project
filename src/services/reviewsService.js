import api from './api';

export const getReviews = () => {
    return fetch(api.reviews)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};

export const postReview = () => {
    return fetch(api.reviews)
    .then(res => res.json())
    .catch(err => console.log(err))
}
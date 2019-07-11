import axios from 'axios';

const BASE_URL = 'https://firebasestorage.googleapis.com/v0/b/testowyprojekt-20219.appspot.com/o/';
export const APIClient = {
    fetchScene: (filename, onSuccess, onError) => {
        axios({
            method: 'GET',
            url: `${BASE_URL}${filename}?alt=media`,
        })
        .then((response) => onSuccess(response.data))
        .catch((error) => onError(error));
    }
};

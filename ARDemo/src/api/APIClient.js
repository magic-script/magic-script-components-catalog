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
    },

    getJSON: (url) => {
        return axios({
            method: 'GET',
            url,
        })
    },

    getJSON2: (roomsListJsonUrl) => {
        axios({
            method: 'GET',
            url: `${roomsListJsonUrl}`,
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => { 
            console.error(error);
        });
    }
};

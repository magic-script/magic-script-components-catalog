export const APIClient = {
    fetchScene: (url, onSuccess, onError) => {
        fetch(url)
        .then(response => onSuccess(response))
        .catch(error => onError(error));
    },

    getJSON: (url) => {
        fetch(url)
        .then(response => response.json())
        .then(responseJson => console.log('fetch.responseJson:', responseJson))
        .catch(error => console.error('fetch.error:', error));
    },
};

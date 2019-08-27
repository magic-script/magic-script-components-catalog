export const APIClient = {
    fetchScene: (url, onSuccess, onError) => {
        // axios({ method: 'GET', url })
        // .then((response) => onSuccess(response.data))
        // .catch((error) => onError(error));
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

    // getJSON2: (roomsListJsonUrl) => {
    //     axios({
    //         method: 'GET',
    //         url: `${roomsListJsonUrl}`,
    //     })
    //     .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch((error) => { 
    //         console.error(error);
    //     });
    // }
};

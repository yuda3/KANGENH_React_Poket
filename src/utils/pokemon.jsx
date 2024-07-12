export const getAllPokemon = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.log('There was a problem with the fetch operation: ' + error.message));
};
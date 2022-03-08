const getMovies = async (jwt) => {
    const headers = new Headers();
    headers.append("authorization", jwt);
    return fetch("http://localhost:3000/movies", {headers})
    .then(res => res.json())
}

const createMovie = async (movie, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("authorization", jwt);
    const body = JSON.stringify({movie});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/movies", requestOptions)
        .then(response => response.json());
}

const deleteMovie = async (movie, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/movies/" + movie._id, requestOptions)
        .then(response => response.text());
}

export {
    getMovies,
    createMovie,
    deleteMovie,
}
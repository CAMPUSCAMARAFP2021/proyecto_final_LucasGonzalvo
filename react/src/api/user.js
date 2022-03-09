const login = async (user, password) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify({user, password});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/users/login", requestOptions)
        .then(response => response.json());
}
const register=async (name,password)=>{
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify({user:{name, password}});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/users/", requestOptions)
        .then(response => response.json());
}

export {
    login,
    register
};
const login = async (user, password) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify({user, password});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/user/login", requestOptions)
        .then(response => response.json());
}
const register=async (name,pass)=>{
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify({user:{name, pass}});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/user/", requestOptions)
        .then(response => response.json());
}

export {
    login,
    register
};
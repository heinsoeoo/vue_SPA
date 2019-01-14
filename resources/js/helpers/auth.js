export function login(credentials){
    return new Promise((res,rej) => {
        axios.post('/api/auth/login', credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((error) => {
                console.log(error);
                rej("Invalid email or password");
            })
    })
}

export function getLocalUser(){
    const userStr = localStorage.getItem('user');

    if (!userStr){
        return null
    }

    return JSON.parse(userStr);
}

export function register(data){
    return new Promise((res,rej) => {
        axios.post('/api/auth/register', data)
            .then((response) => {
                res(response.data);
            })
            .catch((error) => {
                console.log(error);
                rej(error.response.data.error);
            })
    });
}
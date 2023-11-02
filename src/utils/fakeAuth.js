// const setUserData = (data) => {
//     localStorage.setItem('user_data', JSON.stringify(data));
// }
const setUserData = (data) => {
    let storedData = JSON.parse(localStorage.getItem('user_data')) || {}; // Initialize with an empty object if no data exists
    const response = {}
    if (!storedData) {
        storedData[data.Email] = data;
        response['status'] = true;
        response['message'] = 'Data Store Success';

    } else {
        if (data.Email in storedData) {
            response['status'] = false;
            response['message'] = 'Email Already Taken!';
        } else {
            storedData[data.Email] = data;
            response['status'] = true;
            response['message'] = 'Data Store Success';
        }

    }
    localStorage.setItem('user_data', JSON.stringify(storedData));
    return response;

}
const userLoginCheck = (data) => {
    const response = {};
    const storedData = JSON.parse(localStorage.getItem('user_data')) || {};

    if (!(data.username in storedData)) {
        response['status'] = false;
        response['username'] = 'Username not found!';
    } else {
        if (data.password === storedData[data.username].password) {
            response['status'] = true;
            response['message'] = 'Login successful!';
        } else {
            response['status'] = false;
            response['password'] = 'Incorrect password!';
        }
    }

    return response;
};


const setAuth = (username) => {
    const setIn = localStorage.setItem('set_auth', JSON.stringify(username));
    if (setIn) {
        return true;
    } else {
        return false
    }
}

const removeAuth = () => {
    const setIn = localStorage.removeItem('set_auth');
    if (setIn) {
        return true;
    } else {
        return false
    }
}

const checkAuth = () =>{
   
    const storedAuth = JSON.parse(localStorage.getItem('set_auth'));
    if(storedAuth){
        return true;
    }else{
        return false;
    }
}


export { checkAuth, removeAuth, setAuth, setUserData, userLoginCheck };


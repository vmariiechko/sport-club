import axios, { baseUrl } from "../../axios";

let initialState = {
    token: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('token', JSON.stringify({
                token: action.token
            }));
            
            return {
                ...state,
                token: action.token
            }
        case 'LOGOUT':
            localStorage.removeItem('token');

            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
}

export const login = (data) => {
    return dispatch => {
        axios.post(`${baseUrl}/users/login/`, JSON.stringify({email: data.email, password: data.password}))
        .then(({data}) => {
            dispatch(loginAC(data.access))
        })
        .catch((e) => console.log(e))
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(logoutAC())
    }
}

export const loginAC = (token) => ({type: 'LOGIN', token});
export const logoutAC = () => ({type: 'LOGOUT'});
export default authReducer;
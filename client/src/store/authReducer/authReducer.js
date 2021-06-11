import axios, { baseUrl } from "../../axios";

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGIN_STARTED = 'LOGIN_STARTED';

let initialState = {
    token: null,
    refresh: null,
    loading: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_STARTED:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', JSON.stringify({
                token: action.token,
                refresh: action.refresh
            }));

            return {
                ...state,
                loading: false,
                error: null,
                token: action.token,
                refresh: action.refresh
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'LOGOUT':
            localStorage.removeItem('token');

            return {
                ...state,
                token: null,
                refresh: null
            }
        default:
            return state;
    }
}

export const login = (data) => {
    return dispatch => {
        dispatch(loginStarted());
        
        axios.post(`${baseUrl}/users/login/`, JSON.stringify({email: data.email, password: data.password}))
        .then(({data}) => {
            dispatch(loginSuccess(data.access, data.refresh))
        })
        .catch(error => dispatch(loginFailure(error)))
    }
}

export const register = (data) => {
    return dispatch => {
        dispatch(loginStarted());

        axios.post(`${baseUrl}/users/register/`, JSON.stringify({
            email: data.email, 
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            password: data.password,
            password2: data.password2
        }))
        .then(() => {
            axios.post(`${baseUrl}/users/login/`, JSON.stringify({
                email: data.email, 
                password: data.password
            }))
            .then(({data}) => {
                dispatch(loginSuccess(data.access, data.refresh))
            })
            .catch(error => dispatch(loginFailure(error)))
        })
        .catch(error => dispatch(loginFailure(error)))
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(logoutAC())
    }
}

export const loginSuccess = (token, refresh) => ({
    type: LOGIN_SUCCESS,
    token, 
    refresh
});

const loginStarted = () => ({
    type: LOGIN_STARTED
});

const loginFailure = error => ({
    type: LOGIN_FAILURE,
    error
});

export const logoutAC = () => ({type: 'LOGOUT'});

export default authReducer;
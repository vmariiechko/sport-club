import axios, { baseUrl } from "../../axios";
import imageParams from "../../imageParams";
import { loginSuccess, logoutAC } from "../authReducer/authReducer";

const SET_PROFILE_DATA_SUCCESS = 'SET_PROFILE_DATA_SUCCESS';
const SET_PROFILE_DATA_FAILURE = 'SET_PROFILE_DATA_FAILURE';
const SET_PROFILE_DATA_STARTED = 'SET_PROFILE_DATA_STARTED';

let initialState = {
    profileData: {},
    loading: false,
    error: null
};

const myProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA_STARTED:
            return {
                ...state,
                loading: true
            };
        case SET_PROFILE_DATA_SUCCESS:
            return {
                ...state, 
                loading: false,
                error: null,
                profileData: action.profileData
            };
        case SET_PROFILE_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const setProfileData = () => {
    return dispatch => {
        dispatch(setProfileDataStarted());

        axios.get(`${baseUrl}/users/me/`,{
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`}
        })
        .then(({data}) => {
            imageParams(data.avatar, 80)
            .then(params => {
                data['imageParams'] = params;
                dispatch(setProfileDataSuccess(data));
            });
        })
        .catch(err => {
            if (err.response.status === 401){
                const refresh = JSON.parse(localStorage.getItem('token')).refresh;
                axios.post(`${baseUrl}/users/login/refresh/`, {refresh})
                .then(({data}) => {
                    dispatch(loginSuccess(data.access, refresh));
                })
                .catch((err) => {
                    dispatch(logoutAC());
                })
            }
            else {
                dispatch(setProfileDataFailure(err));
            }
        });
    };
};

export const postProfileData = ({email, firstName, lastName, phone}) => {
    return dispatch => {
        dispatch(setProfileDataStarted());

        axios.put(`${baseUrl}/users/me/`, JSON.stringify({email, firstName, lastName, phone}), {
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`}
        })
        .then(({data}) => {
            imageParams(data.avatar, 80)
            .then(params => {
                data['imageParams'] = params;
                dispatch(setProfileDataSuccess(data));
            });
        })
        .catch(err => {
            dispatch(setProfileDataFailure(err.response.data));
        });
    }
}

const setProfileDataSuccess = profileData => ({
    type: SET_PROFILE_DATA_SUCCESS,
    profileData
});

const setProfileDataStarted = () => ({
    type: SET_PROFILE_DATA_STARTED
});

const setProfileDataFailure = error => ({
    type: SET_PROFILE_DATA_FAILURE,
    error
});

export default myProfileReducer;
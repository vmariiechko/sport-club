import axios, { baseUrl } from "../../axios";
import { setSubscriptionSuccess } from "../subscriptionsReducer/subscriptionsReducer";

const SET_PASSES_SUCCESS = 'SET_PASSES_SUCCESS';
const SET_PASSES_FAILURE = 'SET_PASSES_FAILURE';
const SET_PASSES_STARTED = 'SET_PASSES_STARTED';
const SET_BUYING_STARTED = 'SET_BUYING_STARTED';
const SET_BUYING_SUCCESS = 'SET_BUYING_SUCCESS';
const SET_REDIRECT_TO = 'SET_REDIRECT_TO';

let initialState = {
    passes: [],
    loading: false,
    isBuying: false,
    error: null,
    redirectTo: null
};

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PASSES_STARTED:
            return {
                ...state,
                loading: true
            };
        case SET_BUYING_STARTED:
            return {
                ...state,
                isBuying: true
            };
        case SET_BUYING_SUCCESS:
            return {
                ...state,
                isBuying: false
            };
        case SET_PASSES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                passes: [...action.passes]
            };
        case SET_PASSES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case SET_REDIRECT_TO:
            return {
                ...state,
                redirectTo: action.redirectTo
            };
        default:
            return state;
    }
}

export const setPasses = () => {
    return dispatch => {
        dispatch(setPassesStarted());

        axios.get(`${baseUrl}/passes/`)
        .then(({data}) => {
            // data.sort((a, b) => a.id - b.id);
            dispatch(setPassesSuccess(data));
        })
        .catch(err => {
            dispatch(setPassesFailure(err.message));
        });
    };
};

export const buyPass = (card) => {
    return dispatch => {
        dispatch(setBuyingStarted());

        axios.post(`${baseUrl}/users/me/subscription/`, JSON.stringify({card}), {
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.token}`}
        })
        .then(() => {
            axios.get(`${baseUrl}/users/me/subscription/`,{
                headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`}
            })
            .then(({data}) => {
                dispatch(setSubscriptionSuccess(data));
                dispatch(setBuyingSuccess());
                dispatch(setRedirectTo('/profile/subscriptions'));
                setTimeout(() => {
                    dispatch(setRedirectTo(null));
                }, 100);
            })
        })
        .catch(err => {
            dispatch(setPassesFailure(err.message));
            dispatch(setBuyingSuccess());
            dispatch(setRedirectTo('/profile/subscriptions'));
            setTimeout(() => {
                dispatch(setRedirectTo(null));
            }, 100);
        });
    };
};

const setPassesSuccess = passes => ({
    type: SET_PASSES_SUCCESS,
    passes
});

const setRedirectTo = redirectTo => ({
    type: SET_REDIRECT_TO,
    redirectTo
});

const setPassesStarted = () => ({
    type: SET_PASSES_STARTED
});

const setBuyingStarted = () => ({
    type: SET_BUYING_STARTED
});

const setBuyingSuccess = () => ({
    type: SET_BUYING_SUCCESS
});

const setPassesFailure = error => ({
    type: SET_PASSES_FAILURE,
    payload: {
        error
    }
});

export default servicesReducer;
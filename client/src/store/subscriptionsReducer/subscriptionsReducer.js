import axios, { baseUrl } from "../../axios";

const SET_SUBSCRIPTION_SUCCESS = 'SET_SUBSCRIPTION_SUCCESS';
const SET_SUBSCRIPTION_FAILURE = 'SET_SUBSCRIPTION_FAILURE';
const SET_SUBSCRIPTION_STARTED = 'SET_SUBSCRIPTION_STARTED';

let initialState = {
    subscription: null,
    loading: false,
    error: null
};

const subscriptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBSCRIPTION_STARTED:
            return {
                ...state,
                loading: true
            };
        case SET_SUBSCRIPTION_SUCCESS:
            return {
                ...state, 
                loading: false,
                error: null,
                subscription: action.subscription
            };
        case SET_SUBSCRIPTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const setSubscription = () => {
    return dispatch => {
        dispatch(setSubscriptionStarted());

        axios.get(`${baseUrl}/users/me/subscription/`,{
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`}
        })
        .then(({data}) => {
            dispatch(setSubscriptionSuccess(data));
        })
        .catch(err => {
            dispatch(setSubscriptionFailure(err));
        });
    };
};

export const setSubscriptionSuccess = subscription => ({
    type: SET_SUBSCRIPTION_SUCCESS,
    subscription
});

const setSubscriptionStarted = () => ({
    type: SET_SUBSCRIPTION_STARTED
});

const setSubscriptionFailure = error => ({
    type: SET_SUBSCRIPTION_FAILURE,
    error
});

export default subscriptionsReducer;
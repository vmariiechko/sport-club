import axios, { baseUrl } from "../../axios";

const SET_RESERVATIONS_SUCCESS = 'SET_RESERVATIONS_SUCCESS';
const SET_RESERVATIONS_FAILURE = 'SET_RESERVATIONS_FAILURE';
const SET_RESERVATIONS_STARTED = 'SET_RESERVATIONS_STARTED';

let initialState = {
    reservations: [],
    loading: false,
    error: null
};

const reservationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESERVATIONS_STARTED:
            return {
                ...state,
                loading: true
            };
        case SET_RESERVATIONS_SUCCESS:
            return {
                ...state, 
                loading: false,
                error: null,
                reservations: action.reservations
            };
        case SET_RESERVATIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const setReservations = () => {
    return dispatch => {
        getReservations(dispatch);
    };
};

export const orderReservation = (date) => {
    return dispatch => {
        dispatch(setReservationsStarted());

        axios.post(`${baseUrl}/users/me/reservations/`, JSON.stringify({reservedStart: date[0], reservedEnd: date[1]}), {
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`}
        })
        .then(() => {
            getReservations(dispatch);
        })
        .catch(err => {
            dispatch(setReservationsFailure(err.response.data));
        });
    };
};

const getReservations = (dispatch) => {
    dispatch(setReservationsStarted());

    axios.get(`${baseUrl}/users/me/reservations/`,{
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`}
    })
    .then(({data}) => {
        dispatch(setReservationsSuccess(data));
    })
    .catch(err => {
        dispatch(setReservationsFailure(err?.response?.data));
    });
}

export const setReservationsSuccess = reservations => ({
    type: SET_RESERVATIONS_SUCCESS,
    reservations
});

const setReservationsStarted = () => ({
    type: SET_RESERVATIONS_STARTED
});

const setReservationsFailure = error => ({
    type: SET_RESERVATIONS_FAILURE,
    error
});

export default reservationsReducer;
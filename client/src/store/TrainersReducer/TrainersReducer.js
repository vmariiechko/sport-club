import axios, { baseUrl } from "../../axios";

const SET_TRAINERS_SUCCESS = 'SET_TRAINERS_SUCCESS';
const SET_TRAINERS_FAILURE = 'SET_TRAINERS_FAILURE';
const SET_TRAINERS_STARTED = 'SET_TRAINERS_STARTED';

let initialState = {
    trainers: [],
    loading: false,
    error: null
};

const trainersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRAINERS_STARTED:
            return {
                ...state,
                loading: true
            };
        case SET_TRAINERS_SUCCESS:
            return {
                ...state, 
                loading: false,
                error: null,
                trainers: [...action.trainers]
            };
        case SET_TRAINERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

export const setTrainersAC = () => {
    return dispatch => {
        dispatch(setTrainersStarted());

        axios.get(`${baseUrl}/trainers/`)
            .then(({data}) => {
                dispatch(setTrainersSuccess(data));
            })
            .catch(err => {
                dispatch(setTrainersFailure(err.message));
            });
    };
};

const setTrainersSuccess = trainers => ({
    type: SET_TRAINERS_SUCCESS,
    trainers
});

const setTrainersStarted = () => ({
    type: SET_TRAINERS_STARTED
});

const setTrainersFailure = error => ({
    type: SET_TRAINERS_FAILURE,
    payload: {
        error
    }
});

export default trainersReducer;
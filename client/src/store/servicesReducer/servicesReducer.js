import axios, { baseUrl } from "../../axios";

const SET_PASSES_SUCCESS = 'SET_PASSES_SUCCESS';
const SET_PASSES_FAILURE = 'SET_PASSES_FAILURE';
const SET_PASSES_STARTED = 'SET_PASSES_STARTED';

let initialState = {
    passes: [],
    loading: false,
    error: null
};

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PASSES_STARTED:
            return {
                ...state,
                loading: true
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
        default:
            return state;
    }
}

export const setPassesAC = () => {
    return dispatch => {
        dispatch(setPassesStarted());

        axios.get(`${baseUrl}/passes`)
            .then(({data}) => {
                data.sort((a, b) => a.id - b.id);
                dispatch(setPassesSuccess(data));
            })
            .catch(err => {
                dispatch(setPassesFailure(err.message));
            });
    };
};

const setPassesSuccess = passes => ({
    type: SET_PASSES_SUCCESS,
    passes
});

const setPassesStarted = () => ({
    type: SET_PASSES_STARTED
});

const setPassesFailure = error => ({
    type: SET_PASSES_FAILURE,
    payload: {
        error
    }
});

export default servicesReducer;
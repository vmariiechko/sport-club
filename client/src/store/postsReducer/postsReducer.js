import axios, { baseUrl } from "../../axios";

const SET_POSTS_SUCCESS = 'SET_POSTS_SUCCESS';
const SET_POSTS_FAILURE = 'SET_POSTS_FAILURE';
const SET_POSTS_STARTED = 'SET_POSTS_STARTED';

let initialState = {
    posts: [],
    loading: false,
    error: null
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS_STARTED:
            return {
                ...state,
                loading: true
            };
        case SET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                posts: [...action.posts]
            };
        case SET_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

export const setPostsAC = () => {
    return dispatch => {
        dispatch(setPostsStarted());

        axios.get(`${baseUrl}/posts/`)
            .then(({data}) => {
                // data.sort((a, b) => a.id - b.id);
                dispatch(setPostsSuccess(data));
            })
            .catch(err => {
                dispatch(setPostsFailure(err.message));
            });
    };
};

const setPostsSuccess = posts => ({
    type: SET_POSTS_SUCCESS,
    posts
});

const setPostsStarted = () => ({
    type: SET_POSTS_STARTED
});

const setPostsFailure = error => ({
    type: SET_POSTS_FAILURE,
    payload: {
        error
    }
});

export default postsReducer;
import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './authReducer/authReducer';
import navbarReducer from './navbarReducer/navbarReducer';
import servicesReducer from './servicesReducer/servicesReducer';
import postsReducer from './postsReducer/postsReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    auth: authReducer,
    navbar: navbarReducer,
    posts: postsReducer,
    services: servicesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './authReducer/authReducer';
import navbarReducer from './navbarReducer/navbarReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    auth: authReducer,
    navbar: navbarReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './authReducer/authReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
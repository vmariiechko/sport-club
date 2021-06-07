import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './authReducer/authReducer';
import navbarReducer from './navbarReducer/navbarReducer';
import servicesReducer from './servicesReducer/servicesReducer';
import postsReducer from './postsReducer/postsReducer';
import thunk from 'redux-thunk';
import trainersReducer from './TrainersReducer/TrainersReducer';
import myProfileReducer from './myProfileReducer/myProfileReducer';
import subscriptionsReducer from './subscriptionsReducer/subscriptionsReducer';
import reservationsReducer from './reservationsReducer/reservationsReducer';

const reducers = combineReducers({
    auth: authReducer,
    navbar: navbarReducer,
    posts: postsReducer,
    services: servicesReducer,
    trainers: trainersReducer,
    myProfile: myProfileReducer,
    subscriptions: subscriptionsReducer,
    reservations: reservationsReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        const {navbar, posts, services, trainers} = state;
        state = {navbar, posts, services, trainers};
    }

    return reducers(state, action);
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
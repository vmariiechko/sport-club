import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import classes from './Content.module.css';

const Content = (props) => {
    return (
        <div className={classes.Content}>
            <div className={classes.ContentInner}>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/profile' component={ProfilePage}/>
                </Switch>
            </div>
        </div>
    );
};

export default Content;
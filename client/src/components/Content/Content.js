import React, { useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import classes from './Content.module.css';

export const contentBlockId = 'BlockWithScroll';

const Content = () => {
    const ContentDiv = useRef(null);

    // useEffect(() => {
    //     ContentDiv.current.addEventListener('scroll', () => console.log(true))
    // }, []);
    return (
        <div ref={ContentDiv} className={classes.Content} id={contentBlockId}>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/profile' component={ProfilePage}/>
            </Switch>
        </div>
    );
};

export default Content;
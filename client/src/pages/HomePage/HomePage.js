import React from 'react';
import MoreInfo from '../../components/MoreInfo/MoreInfo';
import classes from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={classes.HomePage}>
            <MoreInfo />
        </div>
    );
};

export default HomePage;
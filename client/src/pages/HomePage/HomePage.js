import React from 'react';
import Blog from '../../components/Blog/Blog';
import Intro from '../../components/Intro/Intro';
import MoreInfo from '../../components/MoreInfo/MoreInfo';
import Services from '../../components/Services/Services';
import Team from '../../components/Team/Team';
import classes from './HomePage.module.css';

const HomePage = () => {
    const onChildDidMount = () => {
        console.log('Child component was mounted!');
        // do something else
      };
    return (
        <div className={classes.HomePage}>
            <div className={classes.HomePageInner}>
                <MoreInfo />
                <Intro />
                <Team />
                <Services />
                <Blog callback={onChildDidMount} />
            </div>
        </div>
    );
};

export default HomePage;
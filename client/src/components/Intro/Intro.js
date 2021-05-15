import React from 'react';
import classes from './Intro.module.css';
import IntroImage from '../../assets/images/intro.png';

const Intro = () => {
    return (
        <div className={classes.Intro}>
            <div className={classes.IntroInner}>
                <div className={classes.Image}>
                    <img src={IntroImage} alt=''/>
                </div>
                <div className={classes.Text}>
                    <p>"We had a great collaboration. Really easy to work with and greate style."</p>
                    <p>Larry Sheet, CEO of Hasta la Vista</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
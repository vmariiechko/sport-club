import React from 'react';
import classes from './Trainer.module.css';

const Trainer = ({image}) => {
    return (
        <div className={classes.Trainer}>
            <div className={classes.Image}>
                <img src={image} alt=''/>
            </div>
            <div className={classes.Data}>
                <h5>blaldvv</h5>
                <h6>blaldvv</h6>
            </div>
        </div>
    );
};

export default Trainer;
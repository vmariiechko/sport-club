import React from 'react';
import classes from './Service.module.css';

const Service = ({pass}) => {
    const {name, title, image, descripion, pricePerMonth} = pass;

    return (
        <div className={classes.Service}>
            <div className={classes.Image}>
                <img src={image} alt=''/>
            </div>
            <div className={classes.Data}>
                <h4>{name}</h4>
                <h5>{title}</h5><br/>
                <p>{descripion}</p><br/>
            </div>
            <div className={classes.Button}>BUY</div>
        </div>
    );
};

export default Service;
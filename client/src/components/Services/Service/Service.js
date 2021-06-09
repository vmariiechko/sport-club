import React from 'react';
import classes from './Service.module.css';

const Service = ({pass, buyPass}) => {
    const {name, title, image, descripion, pricePerMonth, visitsCount} = pass;

    return (
        <div className={classes.Service}>
            <div className={classes.Image}>
                <img src={image} alt=''/>
            </div>
            <div className={classes.Data}>
                <h4>{name}</h4>
                <h5>{title}</h5><br/>
                <p><strong>Price per month: </strong> {pricePerMonth}</p>
                <p><strong>Visits count: </strong> {visitsCount}</p><br/>
            </div>
            <div 
                className={classes.Button}
                onClick={() => buyPass(name)}>BUY</div>
        </div>
    );
};

export default Service;
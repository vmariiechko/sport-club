import React from 'react';
import classes from './Service.module.css';

const Service = ({image}) => {
    return (
        <div className={classes.Service}>
            <div className={classes.Image}>
                <img src={image} alt=''/>
            </div>
            <div className={classes.Data}>
                <h4>BRONZE PROGRAM</h4>
                <h5>No personal trainer/12 workouts</h5><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra placerat purus, quis mattis ligula mattis et. Curabitur hendrerit lectus eget est finibus, ac malesuada sapien porttitor. Aliquam scelerisque suscipit tristique. Vivamus a augue dignissim, porttitor augue eu, facilisis dui. Ipsum placerat lacus</p><br/>
            </div>
            <div className={classes.Button}>BUY</div>
        </div>
    );
};

export default Service;
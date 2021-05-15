import React from 'react';
import classes from './Team.module.css';
import image1 from '../../assets/images/3.png';
import image2 from '../../assets/images/1.jpg';
import image3 from '../../assets/images/2.jpg';
import image4 from '../../assets/images/4.jpg';
import image5 from '../../assets/images/3.jpg';
import Trainer from './Trainer/Trainer';

const Team = () => {
    return (
        <div className={classes.Team}>
            <div className={classes.Header}>
                <h2>Team</h2>
                <p>Meet our team of happy creatives. We love what we do and we would love to work with you.</p>
            </div>
            <div className={classes.Trainers}>
                <Trainer image={image1} />
                <Trainer image={image2} />
                <Trainer image={image3} />
                <Trainer image={image4} />
                <Trainer image={image5} />
            </div>
        </div>
    );
};

export default Team;
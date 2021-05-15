import React from 'react';
import classes from './Services.module.css';
import image1 from '../../assets/images/3.png';
import image2 from '../../assets/images/1.jpg';
import image3 from '../../assets/images/2.jpg';
import image4 from '../../assets/images/4.jpg';
import image5 from '../../assets/images/3.jpg';
import Service from './Service/Service';

const Services = () => {
    return (
        <div className={classes.Services}>
            <div className={classes.Header}>
                <h2>Services</h2>
                <p>Meet our Services of happy creatives. We love what we do and we would love to work with you.</p>
            </div>
            <div className={classes.Cards}>
                <Service image={image1} />
                <Service image={image2} />
                <Service image={image3} />
                <Service image={image4} />
                <Service image={image5} />
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import imageParams from '../../../imageParams';
import classes from './Trainer.module.css';

const Trainer = ({image}) => {
    const [params, setParams] = useState(null);

    useEffect(() => {
        imageParams(image).then(params => setParams(params));
    }, []);

    return (
        <div className={classes.Trainer}>
            <div className={classes.Image}>
                <img style={params} src={image} alt=''/>
            </div>
            <div className={classes.Data}>
                <h5>blaldvv</h5>
                <h6>blaldvv</h6>
            </div>
        </div>
    );
};

export default Trainer;
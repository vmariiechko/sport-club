import React, { useEffect, useState } from 'react';
import imageParams from '../../../imageParams';
import classes from './Trainer.module.css';

const Trainer = (props) => {
    const {firstName, lastName, rank, avatar} = props.trainer;
    const [params, setParams] = useState(null);

    useEffect(() => {
        imageParams(avatar).then(params => setParams(params));
    }, []);

    return (
        <div className={classes.Trainer}>
            <div className={classes.Image}>
                <img style={params} src={avatar} alt=''/>
            </div>
            <div className={classes.Data}>
                <h5>{firstName} {lastName}</h5>
                <h6>{rank}</h6>
            </div>
        </div>
    );
};

export default Trainer;
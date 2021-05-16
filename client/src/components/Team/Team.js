import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import classes from './Team.module.css';
import image1 from '../../assets/images/3.png';
import image2 from '../../assets/images/1.jpg';
import image3 from '../../assets/images/2.jpg';
import image4 from '../../assets/images/4.jpg';
import image5 from '../../assets/images/3.jpg';
import Trainer from './Trainer/Trainer';
import { toTrainersBlock } from "../../store/navbarReducer/navbarReducer";

const Team = ({scrollTo}) => {
    const TeamBlock = useRef(null);

    useEffect(() => {
        if (scrollTo === toTrainersBlock) {
            TeamBlock.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [scrollTo]);

    return (
        <div ref={TeamBlock} className={classes.Team}>
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

const mapStateToProps = state => ({scrollTo: state.navbar.scrollTo});
  
export default connect(mapStateToProps)(Team);
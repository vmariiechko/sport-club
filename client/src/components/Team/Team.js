import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import classes from './Team.module.css';
import Trainer from './Trainer/Trainer';
import { toTrainersBlock } from "../../store/navbarReducer/navbarReducer";
import scrollToBlock from '../../scrollTo';
import { setTrainersAC } from '../../store/TrainersReducer/TrainersReducer';

const Team = ({scrollTo, loading, trainers, setTrainers}) => {
    const TeamBlock = useRef(null);

    useEffect(() => {
        if (scrollTo === toTrainersBlock) {
            scrollToBlock(TeamBlock.current.offsetTop);
        }
    }, [scrollTo]);

    useEffect(() => {
        setTrainers();
    }, []);

    return (
        <div ref={TeamBlock} className={classes.Team}>
            <div className={classes.Header}>
                <h2>Team</h2>
                <p>Meet our team of happy creatives. We love what we do and we would love to work with you.</p>
            </div>
            <div className={classes.Trainers}>
                {loading ?
                    <div></div>
                    :
                    trainers.map(trainer => <Trainer key={trainer.id} trainer={trainer} />)
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    scrollTo: state.navbar.scrollTo,
    loading: state.trainers.loading,
    trainers: state.trainers.trainers
});

const mapDispatchToProps = dispatch => ({
    setTrainers: () => dispatch(setTrainersAC())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Team);
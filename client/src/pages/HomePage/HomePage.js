import React from 'react';
import { connect } from 'react-redux';
import Blog from '../../components/Blog/Blog';
import Intro from '../../components/Intro/Intro';
import MoreInfo from '../../components/MoreInfo/MoreInfo';
import Services from '../../components/Services/Services';
import Spinner from '../../components/Spinner/Spinner';
import Team from '../../components/Team/Team';
import classes from './HomePage.module.css';

const HomePage = ({isTrainersLoading, isPostsLoading, isServicesLoading}) => {
    return (
        <div className={classes.HomePage}>
            <div className={classes.HomePageInner}>
                {(isTrainersLoading || isPostsLoading || isServicesLoading) &&
                    <Spinner />
                }
                <MoreInfo />
                <Intro />
                <Team />
                <Services showHeader={true}/>
                <Blog />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isTrainersLoading: state.trainers.loading,
    isPostsLoading: state.posts.loading,
    isServicesLoading: state.services.loading
});
  
export default connect(mapStateToProps)(HomePage);
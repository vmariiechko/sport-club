import React, { useEffect, useState } from 'react';
import classes from './ProfilePage.module.css';
import ProfileAccount from '../../components/ProfileAccount/ProfileAccount';
import ProfileAuth from '../../components/ProfileAuth/ProfileAuth';
import { connect } from 'react-redux';

const ProfilePage = ({token}) => {
    return (
        <div className={classes.ProfilePage}>
            {token ? 
                <ProfileAccount />
                :
                <ProfileAuth />
            }
        </div>
    );
};

const mapStateToProps = state => ({
    token: state.auth.token
});

export default connect(mapStateToProps)(ProfilePage);
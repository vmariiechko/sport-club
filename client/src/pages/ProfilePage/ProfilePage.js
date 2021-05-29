import React, { useEffect, useState } from 'react';
import classes from './ProfilePage.module.css';
import profileImage from '../../assets/images/profileImage.png';
import imageParams from '../../imageParams';

const ProfilePage = () => {
    const [profileImgParams, setProfileImgParams] = useState(null);

    useEffect(() => {
        imageParams(profileImage).then(params => setProfileImgParams(params));
    }, []);
    
    return (
        <div className={classes.ProfilePage}>
            <div className={classes.ProfilePageInner}>
                <div className={classes.Avatar}>
                    <div className={classes.AvatarInner}>
                        <img style={profileImgParams} src={profileImage} alt='' />
                    </div>
                </div>
                <div className={classes.Menu}>
                    <div className={classes.MenuInner}>
                        <p>
                            <span>INFO ABOUT PROGRAMS</span> /
                            <span> CALENDAR</span> /
                            <span> NUMBER OF WORKOUTS</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
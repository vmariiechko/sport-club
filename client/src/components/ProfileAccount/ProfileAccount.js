import React, { useEffect, useState } from 'react';
import imageParams from '../../imageParams';
import profileImage from '../../assets/images/profileImage.png';
import classes from "./ProfileAccount.module.css";

const ProfileAccount = () => {
    const [profileImgParams, setProfileImgParams] = useState(null);
    
    useEffect(() => {
        imageParams(profileImage).then(params => setProfileImgParams(params));
    }, []);

    return (
        <div className={classes.ProfileAccount}>
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
    );
};

export default ProfileAccount;
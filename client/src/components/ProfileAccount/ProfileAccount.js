import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/authReducer/authReducer';
import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router';
import Subscriptions from '../Subscriptions/Subscriptions';
import {Link} from 'react-router-dom';
import Reservations from '../Reservations/Reservations';
import { setProfileData } from '../../store/myProfileReducer/myProfileReducer';
import Spinner from '../Spinner/Spinner';
import classes from "./ProfileAccount.module.css";

const subscriptions = 'subscriptions';
const reservations = 'reservations';

const ProfileAccount = ({logoutHandler, setProfileDataHandler, loading, profileData, error}) => {
    const history = useHistory();
    const pathName = history.location.pathname;
    let { path, url } = useRouteMatch();

    useEffect(() => {
        setProfileDataHandler();
    }, []);

    const onLogout = () => {
        logoutHandler(); 
        history.push('/profile');
    }

    return (
        <div className={classes.ProfileAccount}>
            <div className={classes.Navbar}>
                <p>
                    <span>
                        <Link className={pathName === url ? classes.Active : undefined} to={url}>
                            My&nbsp;profile
                        </Link>
                    </span> /&nbsp;
                    <span>
                        <Link className={pathName === `${url}/${subscriptions}` ? classes.Active : undefined} to={`${url}/${subscriptions}`}>
                            Subscriptions
                        </Link>
                    </span> /&nbsp;
                    <span>
                        <Link className={pathName === `${url}/${reservations}` ? classes.Active : undefined} to={`${url}/${reservations}`}>
                            Reservations
                        </Link>
                    </span> /&nbsp;
                    <span onClick={onLogout}>Log&nbsp;out</span>
                </p>
            </div>
            <div className={classes.Main}>
                <Switch>
                    <Route exact path={path}>
                        {loading ?
                        <Spinner />
                        :
                        <><div className={classes.Avatar}>
                                <div className={classes.AvatarInner}>
                                    <img style={profileData.imageParams} src={profileData.avatar} alt='' />
                                </div>
                            </div>
                            <div className={classes.Menu}>
                                <div className={classes.MenuInner}>
                                    <div>
                                        <span>First name</span>
                                        <input value={profileData.firstName} />
                                        <span>Last name</span>
                                        <input value={profileData.lastName}/>
                                        <span>Email</span>
                                        <input value={profileData.email}/>
                                        <span>Phone</span>
                                        <input value={profileData.phone}/>
                                        <div className={classes.SaveData}><span>Save</span></div>
                                    </div>
                                </div>
                            </div>
                        </>}
                    </Route>
                    <Route path={`${path}/:topicId`} component={Topic} />
                </Switch>
            </div>
        </div>
    );
};

const Topic = () => {
    const { topicId } = useParams();
    return topicId === subscriptions ? <Subscriptions /> : topicId === reservations ? <Reservations /> : <div></div>;
}

const mapStateToProps = state => ({
    profileData: state.myProfile.profileData,
    loading: state.myProfile.loading,
    error: state.myProfile.error
});

const mapDispatchToProps = dispatch => ({
    logoutHandler: () => {
        dispatch(logout())
    },
    setProfileDataHandler: () => {
        dispatch(setProfileData())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAccount);
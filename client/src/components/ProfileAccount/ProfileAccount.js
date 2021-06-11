import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/authReducer/authReducer';
import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router';
import Subscriptions from '../Subscriptions/Subscriptions';
import {Link} from 'react-router-dom';
import Reservations from '../Reservations/Reservations';
import { postProfileData, setProfileData } from '../../store/myProfileReducer/myProfileReducer';
import Spinner from '../Spinner/Spinner';
import classes from "./ProfileAccount.module.css";

const subscriptions = 'subscriptions';
const reservations = 'reservations';

const ProfileAccount = ({logoutHandler, setProfileDataHandler, postProfileDataHandler, loading, pData, error}) => {
    const [profileData, setData] = useState({});
    const history = useHistory();
    const pathName = history.location.pathname;
    let { path, url } = useRouteMatch();

    useEffect(() => {
        setProfileDataHandler();
    }, []);

    useEffect(() => {
        if (pData)
            setData({
                email: pData.email,
                firstName: pData.firstName,
                lastName: pData.lastName,
                phone: pData.phone
            });
    }, [pData]);

    const onLogout = () => {
        logoutHandler(); 
        history.push('/profile');
    }

    const changeProfileData = e => setData({...profileData, [e.target.name]: e.target.value});

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
                                    <img style={pData.imageParams} src={pData.avatar} alt='' />
                                </div>
                            </div>
                            <div className={classes.Menu}>
                                <div className={classes.MenuInner}>
                                    <div>
                                        <span>First name</span>
                                        {error && <div className={classes.ErrorMessage}>{error.firstName}</div>}
                                        <input onChange={(e) => changeProfileData(e)} name='firstName' value={profileData.firstName} />
                                        <span>Last name</span>
                                        {error && <div className={classes.ErrorMessage}>{error.lastName}</div>}
                                        <input onChange={(e) => changeProfileData(e)} name='lastName' value={profileData.lastName}/>
                                        <span>Email</span>
                                        {error && <div className={classes.ErrorMessage}>{error.email}</div>}
                                        <input onChange={(e) => changeProfileData(e)} name='email' value={profileData.email}/>
                                        <span>Phone</span>
                                        {error && <div className={classes.ErrorMessage}>{error.phone}</div>}
                                        <input onChange={(e) => changeProfileData(e)} name='phone' value={profileData.phone}/>
                                        <div onClick={() => postProfileDataHandler(profileData)} className={classes.SaveData}><span>Save</span></div>
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
    pData: state.myProfile.profileData,
    loading: state.myProfile.loading,
    error: state.myProfile.error
});

const mapDispatchToProps = dispatch => ({
    logoutHandler: () => {
        dispatch(logout())
    },
    setProfileDataHandler: () => {
        dispatch(setProfileData())
    },
    postProfileDataHandler: (data) => {
        dispatch(postProfileData(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAccount);
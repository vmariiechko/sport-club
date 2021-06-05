import React, { useState } from 'react';
import { login, register } from '../../store/authReducer/authReducer';
import { connect } from "react-redux";
import classes from './ProfileAuth.module.css';
import { ReactSVG } from 'react-svg';
import TwitterIcon from '../../assets/images/twitter_icon.svg';
import InstaIcon from '../../assets/images/insta_icon.svg';
import FaceIcon from '../../assets/images/face_icon.svg';
import LinkedinIcon from '../../assets/images/linkedin_icon.svg';
import Spinner from '../Spinner/Spinner';

const ProfileAuth = ({loginHandler, registerHandler, loading, error}) => {
    const [isAccountExist, setIsAccountExist] = useState(true);
    const [form, setForm] = useState({
        email: '',
        firstName: '',
        password: '',
        password2: '',
        lastName: '',
        phone: ''
    });

    const changeHandler = e => setForm({...form, [e.target.name]: e.target.value});

    const authHandler = () => isAccountExist ? loginHandler(form) : registerHandler(form);

    return (
        <div className={classes.ProfileAuth}>
            {loading && <Spinner />}
            <h1>Sign {isAccountExist ? 'in' : 'up'}</h1>
            {error && <div className={classes.ErrorMessage}>{error.response.data.detail}</div>}
            <div className={classes.Inputs}>
                {!isAccountExist && <>
                    {error && <div className={classes.ErrorMessage}>{error.response.data.firstName}</div>}
                    <input onChange={changeHandler} name='firstName' placeholder='First name'/>
                    {error && <div className={classes.ErrorMessage}>{error.response.data.lastName}</div>}
                    <input onChange={changeHandler} name='lastName' placeholder='Last name'/>
                    {error && <div className={classes.ErrorMessage}>{error.response.data.phone}</div>}
                    <input onChange={changeHandler} name='phone' placeholder='Phone number'/>
                </>}
                {error && <div className={classes.ErrorMessage}>{error.response.data.email}</div>}
                <input onChange={changeHandler} name='email' placeholder='Email'/>
                {error && <div className={classes.ErrorMessage}>{error.response.data.password}</div>}
                <input onChange={changeHandler} name='password' type='password' placeholder='Password'/>
                {error && <div className={classes.ErrorMessage}>{error.response.data.password2}</div>}
                {!isAccountExist && <input onChange={changeHandler} type='password' name='password2' placeholder='Repeat password'/>}
            </div>
            <div onClick={authHandler} className={classes.Submit}>Submit</div>
            <div>Don't have an account? <span className={classes.SignUpLink} onClick={() => setIsAccountExist(!isAccountExist)}>Sign {!isAccountExist ? 'in' : 'up'}</span></div><br/>
            <div className={classes.MoreInfo}>
                <span>Gustavslung 99</span>
                <span>167-51 BROMMA</span>
                <span>Tel: +48 589 654 123</span>
                <span>info@bgom.com</span><br/>
                <div className={classes.Icons}>
                    <ReactSVG src={TwitterIcon} />
                    <ReactSVG src={InstaIcon} />
                    <ReactSVG src={FaceIcon} />
                    <ReactSVG src={LinkedinIcon} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    loading: state.auth.loading,
    error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
    loginHandler: (data) => {
        dispatch(login(data))
    },
    registerHandler: (data) => {
        dispatch(register(data))
    } 
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAuth);
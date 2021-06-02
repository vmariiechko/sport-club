import React, { useState } from 'react';
import { login } from '../../store/authReducer/authReducer';
import { connect } from "react-redux";
import classes from './ProfileAuth.module.css';

const ProfileAuth = ({loginHandler}) => {
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

    const authHandler = () => {
        isAccountExist ? loginHandler(form) : console.log('registre')
    }

    return (
        <div className={classes.ProfileAuth}>
            <h1>Sign {isAccountExist ? 'in' : 'up'}</h1>
            {!isAccountExist && <><input onChange={changeHandler} name='firstName' placeholder='First name'/><br/></>}
            {!isAccountExist && <><input onChange={changeHandler} name='lastName' placeholder='Last name'/><br/></>}
            {!isAccountExist && <><input onChange={changeHandler} name='phone' placeholder='Phone number'/><br/></>}
            <input onChange={changeHandler} name='email' placeholder='Email'/><br/>
            <input onChange={changeHandler} name='password' placeholder='Password'/><br/>
            {!isAccountExist && <><input onChange={changeHandler} name='password2' placeholder='Repeat password'/><br/></>}
            <button onClick={authHandler}>Submit</button><br/>
            Don't have an account? <span onClick={() => setIsAccountExist(!isAccountExist)}>Sign {!isAccountExist ? 'in' : 'up'}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    loginHandler: (data) => {
        dispatch(login(data))
    }
});

export default connect(null, mapDispatchToProps)(ProfileAuth);
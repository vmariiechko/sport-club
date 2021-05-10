import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg';

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <div className={classes.HeaderInner}>
                <div className={classes.Logo}>
                    <ReactSVG src={logo} />
                </div>
                <div className={classes.Navbar}>
                    <Link to='/'>News</Link>    
                    <Link to='/'>Programs</Link>
                    <Link to='/'>Trainers</Link>
                    <Link to='/'>About us</Link>
                    <Link to='/'>Contact</Link>
                    <Link to='/profile'>Account</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
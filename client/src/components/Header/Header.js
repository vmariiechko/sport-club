import React from 'react';
import { ReactSVG } from 'react-svg'
import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import Navbar from '../Navbar/Navbar';

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <div className={classes.HeaderInner}>
                <div className={classes.Logo}>
                    <ReactSVG src={logo} />
                </div>
                <Navbar />
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/trainers'>Trainers</Link>
            <Link to='/profile'>Your profile</Link>
        </div>
    );
};

export default Header;
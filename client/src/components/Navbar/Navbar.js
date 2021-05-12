import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    const [isNavbarOpened, setIsNavbarOpened] = useState(false);
    const layoutDiv = useRef(null);
    const tabsDiv = useRef(null);

    const toggleNavbarHandler = () => setIsNavbarOpened(!isNavbarOpened);

    useEffect(() => {
        if (props.isMobile) {
            if (!isNavbarOpened) {
                layoutDiv.current.style.display = 'none';
                tabsDiv.current.style.display = 'none';
            } else {
                layoutDiv.current.style.display = 'block';
                tabsDiv.current.style.display = 'flex';
            }
        } else {
            layoutDiv.current.style.display = 'none';
            tabsDiv.current.style.display = 'flex';
            setIsNavbarOpened(false);
        }
    }, [isNavbarOpened, props.isMobile]);

    return (
        <div className={classes.Navbar}>
            <div ref={tabsDiv} className={classes.Tabs}>
                <Link to='/'>News</Link>    
                <Link to='/'>Programs</Link>
                <Link to='/'>Trainers</Link>
                <Link to='/'>About us</Link>
                <Link to='/'>Contact</Link>
                <Link to='/profile'>Account</Link>
            </div>
            <div 
                ref={layoutDiv} 
                onClick={toggleNavbarHandler} 
                className={classes.Layout}>
            </div>
            <div className={classes.Burger}>
                <i onClick={toggleNavbarHandler} 
                    className="material-icons" 
                    style={{fontSize: '30px'}}>
                        {isNavbarOpened ? 'close' : 'dehaze'}
                </i>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({isMobile: state.navbar.isMobile});
  
export default connect(mapStateToProps)(Navbar);
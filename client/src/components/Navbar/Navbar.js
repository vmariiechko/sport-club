import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {toAboutBlock, toContactBlock, toTrainersBlock, toServicesBlock, toNewsBlock, setScrollToAC} from '../../store/navbarReducer/navbarReducer';
import classes from './Navbar.module.css';

const Navbar = ({isMobile, setScrollTo}) => {
    const [isNavbarOpened, setIsNavbarOpened] = useState(false);
    const layoutDiv = useRef(null);
    const tabsDiv = useRef(null);

    const toggleNavbarHandler = () => setIsNavbarOpened(!isNavbarOpened);

    useEffect(() => {
        if (isMobile) {
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
    }, [isNavbarOpened, isMobile]);

    const navbarActions = (block) => {
        setScrollTo(block);
        setIsNavbarOpened(false);
    }

    return (
        <div className={classes.Navbar}>
            <div ref={tabsDiv} className={classes.Tabs}>
                <Link onClick={() => navbarActions(toAboutBlock)} to='/'>About us</Link>
                <Link onClick={() => navbarActions(toContactBlock)} to='/'>Contact</Link>
                <Link onClick={() => navbarActions(toTrainersBlock)} to='/'>Trainers</Link>
                <Link onClick={() => navbarActions(toServicesBlock)} to='/'>Services</Link>
                <Link onClick={() => navbarActions(toNewsBlock)} to='/'>News</Link>    
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

const mapDispatchToProps = dispatch => {
    return {
        setScrollTo: scrollTo => dispatch(setScrollToAC(scrollTo))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
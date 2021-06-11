import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import classes from './Services.module.css';
import Service from './Service/Service';
import { toServicesBlock } from "../../store/navbarReducer/navbarReducer";
import { buyPass, setPasses } from "../../store/servicesReducer/servicesReducer";
import scrollToBlock from '../../scrollTo';
import Spinner from '../Spinner/Spinner';
import { useHistory } from 'react-router';

const Services = (props) => { 
    const history = useHistory();
    const ServicesBlock = useRef(null);

    useEffect(() => {
        if (props.scrollTo === toServicesBlock) {
            scrollToBlock(ServicesBlock.current.offsetTop);
        }
    }, [props.scrollTo]);

    useEffect(() => {
        props.setPassesHandler();
    }, []);

    useEffect(() => {
        if (props.redirectTo){
            history.push(props.redirectTo);
        }
    }, [props.redirectTo]);

    return (
        <div ref={ServicesBlock} className={classes.Services}>
            {props.showHeader &&
            <div className={classes.Header}>
                <h2>Services</h2>
                <p>Meet our Services of happy creatives. We love what we do and we would love to work with you.</p>
            </div>}
            <div className={classes.Cards}>
                {props.loading ?
                    <div></div>
                    :
                    <>
                        {props.isBuying && <Spinner />}
                        {props.passes.map(pass => <Service key={pass.id} pass={pass} buyPass={props.buyPassHandler}/>)}
                    </>
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    scrollTo: state.navbar.scrollTo,
    loading: state.services.loading,
    isBuying: state.services.isBuying,
    passes: state.services.passes,
    redirectTo: state.services.redirectTo
});

const mapDispatchToProps = dispatch => ({
    setPassesHandler: () => {
        dispatch(setPasses())
    },
    buyPassHandler: (card) => {
        dispatch(buyPass(card))
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Services);
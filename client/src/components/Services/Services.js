import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import classes from './Services.module.css';
import Service from './Service/Service';
import { toServicesBlock } from "../../store/navbarReducer/navbarReducer";
import { setPassesAC } from "../../store/servicesReducer/servicesReducer";
import scrollToBlock from '../../scrollTo';

const Services = (props) => { 
    const ServicesBlock = useRef(null);

    useEffect(() => {
        if (props.scrollTo === toServicesBlock) {
            scrollToBlock(ServicesBlock.current.offsetTop);
        }
    }, [props.scrollTo]);

    useEffect(() => {
        props.setPasses();
    }, []);

    return (
        <div ref={ServicesBlock} className={classes.Services}>
            <div className={classes.Header}>
                <h2>Services</h2>
                <p>Meet our Services of happy creatives. We love what we do and we would love to work with you.</p>
            </div>
            <div className={classes.Cards}>
                {props.loading ?
                    <div></div>
                    :
                    props.passes.map(pass => <Service key={pass.id} pass={pass} />)
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    scrollTo: state.navbar.scrollTo,
    loading: state.services.loading,
    passes: state.services.passes
});

const mapDispatchToProps = dispatch => {
    return {
        setPasses: () => {
            dispatch(setPassesAC())
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Services);
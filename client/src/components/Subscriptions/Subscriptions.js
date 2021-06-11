import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSubscription } from '../../store/subscriptionsReducer/subscriptionsReducer';
import Services from '../Services/Services';
import Spinner from '../Spinner/Spinner';
import classes from './Subscriptions.module.css';

const toLocalDate = (date) => {
    const withOffset = new Date(Date.parse(date) - new Date(date).getTimezoneOffset() * 60000);
    const splitDate = withOffset.toDateString().split(' ');
    return `${splitDate[2]} ${splitDate[1]}, ${splitDate[3]} ${withOffset.toTimeString().replace(/gmt.*$/i, '')}`;
}

const Subscriptions = ({setSubscriptionHandler, error, loading, subscription}) => {

    useEffect(() => {
        setSubscriptionHandler();
    }, []);

    return (
        <div className={classes.Subscriptions}>
            {loading ? 
                <Spinner />
            :
            <>
                <h3>Your subscription</h3>
                <div className={classes.Main}>
                    {subscription ?
                        <div className={classes.Subscription}>
                            <h3>{subscription.card}</h3>
                            <div style={{textAlign: 'center'}}><strong>Count of visites: </strong>{subscription.visits_count}</div>
                            <div style={{textAlign: 'center'}}><strong>Purchase date: </strong>{toLocalDate(subscription.purchased)}</div>
                            <div style={{textAlign: 'center'}}><strong>Will be expired: </strong>{toLocalDate(subscription.expires)}</div>
                        </div>
                    :
                    <>
                        <span style={{textAlign: 'center'}}>{error?.response.data.detail}</span><br />
                        <h4>Our offer:</h4>
                        <Services showHeader={false} />
                    </>}
                </div>
            </>}
        </div>
    );
};

const mapStateToProps = state => ({
    subscription: state.subscriptions.subscription,
    loading: state.subscriptions.loading,
    error: state.subscriptions.error
});

const mapDispatchToProps = dispatch => ({
    setSubscriptionHandler: () => {
        dispatch(setSubscription())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
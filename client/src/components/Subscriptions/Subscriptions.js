import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSubscription } from '../../store/subscriptionsReducer/subscriptionsReducer';
import Services from '../Services/Services';
import Spinner from '../Spinner/Spinner';
import classes from './Subscriptions.module.css';

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
                <div className={classes.Subscription}>
                    {subscription ?
                        <div>
                            <div>{subscription.card}</div>
                            <div>{subscription.visits_count}</div>
                            <div>{subscription.purchased}</div>
                            <div>{subscription.expires}</div>
                        </div>
                    :
                    <>
                        <div>{error?.response.data.detail}</div>
                        <div>
                            <div>But you also can buy it</div>
                            <Services showHeader={false} />
                        </div>
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
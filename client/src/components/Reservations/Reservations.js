import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { orderReservation, setReservations } from '../../store/reservationsReducer/reservationsReducer';
import Spinner from '../Spinner/Spinner';
import classes from './Reservations.module.css';
import TextField from '@material-ui/core/TextField';

const toLocalDate = (time) => {
    return new Date(Date.parse(time) - new Date(time).getTimezoneOffset() * 60000).toISOString();
}

const Reservations = ({setReservationsHandler, error, loading, reservations, orderReservationHandler}) => {
    const [dateForCalendarFrom, setDateForCalendarFrom] = useState(toLocalDate(new Date(Date.now() + 86400000)).replace(/\:..\..*$/, ''));
    const [dateForCalendarTo, setDateForCalendarTo] = useState(toLocalDate(new Date(Date.now() + 90060000)).replace(/\:..\..*$/, ''));
    const [dateForServer, setDateForServer] = useState([toLocalDate(dateForCalendarFrom), toLocalDate(dateForCalendarTo)]);

    useEffect(() => {
        setReservationsHandler();
    }, []);

    useEffect(() => {
        setDateForServer([toLocalDate(dateForCalendarFrom), toLocalDate(dateForCalendarTo)]);
    }, [dateForCalendarFrom, dateForCalendarTo]);

    return (
        <div className={classes.Subscriptions}>
            {loading ? 
                <Spinner />
            :
            <>
                <h3>Your reservations</h3>
                {error && <div style={{color: 'red'}}>{error.subscription || error.reservedRange}</div>}
                <form className={classes.container} noValidate>
                    {error && <div style={{color: 'red'}}>{error.reservedStart}</div>}
                    <TextField
                        id="datetime-local"
                        label="Reservation start"
                        type="datetime-local"
                        defaultValue={dateForCalendarFrom}
                        className={classes.textField}
                        onChange={(e) => setDateForCalendarFrom(e.target.value)}
                        InputLabelProps={{shrink: true}}
                    />
                </form>
                <form className={classes.container} noValidate>
                    {error && <div style={{color: 'red'}}>{error.reservedEnd}</div>}
                    <TextField
                        id="datetime-local"
                        label="Reservation end"
                        type="datetime-local"
                        defaultValue={dateForCalendarTo}
                        className={classes.textField}
                        onChange={(e) => setDateForCalendarTo(e.target.value)}
                        InputLabelProps={{shrink: true}}
                    />
                </form>
                <button onClick={() => orderReservationHandler(dateForServer)}>Order</button>
                <div className={classes.Subscription}>
                    {reservations.length ?
                        reservations.map(reservation => {
                            return (
                                <div key={reservation.id} style={{display: 'flex'}}>
                                    <div>{reservation.trainer} |&nbsp;</div>
                                    <div>{reservation.status} |&nbsp;</div>
                                    <div>{reservation.reservedStart} |&nbsp;</div>
                                    <div>{reservation.reservedEnd} |&nbsp;</div>
                                    <div>{reservation.updated}</div>
                                </div>
                        )})
                    :
                    <>
                        <div>{error?.detail}</div>
                    </>}
                </div>
            </>}
        </div>
    );
};

const mapStateToProps = state => ({
    reservations: state.reservations.reservations,
    loading: state.reservations.loading,
    error: state.reservations.error
});

const mapDispatchToProps = dispatch => ({
    setReservationsHandler: () => {
        dispatch(setReservations())
    },
    orderReservationHandler: (date) => {
        dispatch(orderReservation(date))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Reservations);
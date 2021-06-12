import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { orderReservation, setReservations } from '../../store/reservationsReducer/reservationsReducer';
import Spinner from '../Spinner/Spinner';
import classes from './Reservations.module.css';
import TextField from '@material-ui/core/TextField';

const timeOffset = new Date(Date.now()).getTimezoneOffset() * 60000;

const fixDateForServer = (d) => {
    try {
        return new Date(d).toISOString();
    } catch {
        return new Date(Date.now() + 86400000).toISOString();
    }
}
const fixDateForCalendar = (d) => new Date(Date.parse(new Date(d)) - timeOffset).toISOString();

const fixDateForTable = (d) => {
    const date = new Date(d);
    const splitDate = date.toDateString().split(' ');
    return `${splitDate[2]} ${splitDate[1]}, ${splitDate[3]} ${date.toTimeString().replace(/gmt.*$/i, '')}`;
}

const Reservations = ({setReservationsHandler, error, loading, reservations, orderReservationHandler}) => {
    const [dateForCalendarFrom, setDateForCalendarFrom] = useState(fixDateForCalendar(Date.now() + 86400000).replace(/\:..\..*$/, ''));
    const [dateForCalendarTo, setDateForCalendarTo] = useState(fixDateForCalendar(Date.now() + 90060000).replace(/\:..\..*$/, ''));
    const [dateForServer, setDateForServer] = useState([]);

    useEffect(() => {
        setReservationsHandler();
    }, []);

    useEffect(() => {
        setDateForServer([fixDateForServer(dateForCalendarFrom), fixDateForServer(dateForCalendarTo)]);
    }, [dateForCalendarFrom, dateForCalendarTo]);

    return (
        <div className={classes.Reservations}>
            {loading ? 
                <Spinner />
            :
            <>
                <h3>Your reservations</h3>
                {error && <div className={classes.Error}>{error.detail || error.subscription || error.reservedRange}</div>}
                <div className={classes.Content}>
                    <div className={classes.CreateReservation}>
                        <form className={classes.container} noValidate>
                            {error && <div className={classes.Error}>{error.reservedStart}</div>}
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
                            {error && <div className={classes.Error}>{error.reservedEnd}</div>}
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
                        <div className={classes.Submit} onClick={() => orderReservationHandler(dateForServer)}>Order</div>
                    </div>
                    <div className={classes.ReservationsTable}>
                        {reservations.length !== 0 &&
                            <table>
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Trainer</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th>Last update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservations.map(reservation => {
                                        return (
                                            <tr key={reservation.id}>
                                                <td>{reservation.status}</td>
                                                <td>{reservation.trainer}</td>
                                                <td>{fixDateForTable(reservation.reservedStart)}</td>
                                                <td>{fixDateForTable(reservation.reservedEnd)}</td>
                                                <td>{fixDateForTable(reservation.updated)}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        }
                    </div>
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
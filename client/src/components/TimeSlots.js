import React from 'react';

import { connect } from 'react-redux';

const TimeSlots = (props) => {
    function slots() {
        let timeSlots = [];
        for (let i = 0; i < 24; i++) {
            timeSlots.push(i);
        }
        return timeSlots;
    }

    function formatTime(hr) {
        if (hr < 10) {
            return `0${hr}:00`;
        } else {
            return `${hr}:00`;
        }
    }

    return (
        <div>
            {
                slots().map((slot) => {
                    const isBooked = props.events.find((event) => {
                        return (slot.toString() === event.time.split(':')[0]);
                    }) ? true : false;
                    const isBookedByAuthedUser = props.events.find((event) => {
                        return (slot.toString() === event.time.split(':')[0] && (event.booked_by && event.booked_by.id == props.autheUserId));
                    }) ? true : false;
                    return (
                        <div className='timeSlotBtn' key={slot}>
                            <button className={"button is-link " + (isBookedByAuthedUser ? '' : 'is-outlined')} disabled={(isBooked && !isBookedByAuthedUser) ? 'disabled' : ''}>
                                {formatTime(slot)}
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
}


const mapStateToProps = state => ({
    autheUserId: state.auth.id
});

export default connect(mapStateToProps)(TimeSlots);
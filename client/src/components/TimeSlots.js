import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import utils from '../Utils';
import { eventAdd } from '../actions/events'

class TimeSlots extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSlot: null,
        }

        this.handleSlotBtnClick = this.handleSlotBtnClick.bind(this);
        this.handleSlotBtnBlur = this.handleSlotBtnBlur.bind(this);
        this.handleReserveBtnClick = this.handleReserveBtnClick.bind(this);
    }

    slots() {
        let timeSlots = [];
        for (let i = 0; i < 24; i++) {
            timeSlots.push(i);
        }
        return timeSlots;
    }

    handleSlotBtnClick(slot) {
        setTimeout(() => { this.setState({ selectedSlot: slot }) }, 100);
    }

    handleSlotBtnBlur(e) {
        setTimeout(() => { this.setState({ selectedSlot: null }) }, 50);
    }

    handleReserveBtnClick() {
        if (this.state.selectedSlot) {
            this.props.eventAdd(this.props.userID, this.props.date, this.state.selectedSlot);
        }
        this.setState({ selectedSlot: null });
    }

    render() {
        return (
            <div>
                {
                    this.slots().map((slot) => {
                        const isBooked = this.props.events.find((event) => {
                            return (utils.formatTime({ hr: slot }) === event.time);
                        }) ? true : false;

                        const isBookedByAuthedUser = this.props.events.find((event) => {
                            return (utils.formatTime({ hr: slot }) === event.time && (event.booked_by && event.booked_by.id === this.props.autheUserId));
                        }) ? true : false;

                        return (
                            <div className='timeSlotBtn' key={slot}>
                                <button onBlur={(e) => { this.handleSlotBtnBlur(e) }} onClick={() => { this.handleSlotBtnClick(slot) }} className={"button " + (isBookedByAuthedUser ? 'is-success' : 'is-link is-outlined')} disabled={(isBooked && !isBookedByAuthedUser) ? 'disabled' : ''}>
                                    {utils.formatTime({ hr: slot, format: 'HH:MM' })}
                                </button>
                            </div>
                        );
                    })
                }
                <div className={'bottom-bar columns is-gapless ' + (this.state.selectedSlot ? '' : 'is-hidden')}>
                    <div className="column bottom-btn reserveBtn" onClick={this.handleReserveBtnClick}>Reserve Selected Slot</div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    autheUserId: state.auth.id
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            eventAdd
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots);
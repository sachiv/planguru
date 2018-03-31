import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  eventsLoad
} from '../actions/events';

class Events extends React.Component {
  componentDidMount() {
    this.props.eventsLoad()
  }

  render() {
    return (
      <div>
        <h1>Events</h1>
        {this.props.events.map(event =>
          <li key={event.id}>{new Date(event.date + "T" + event.time).toLocaleString()} {event.booked_by ? ', booked by ' + event.booked_by.name : ''}</li>
        )}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  events: state.events.events
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      eventsLoad
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Events);
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

  eventsList() {
    let html = [], groupedEvents = {};
    // Grouping events according to date
    for (let e of this.props.events) {
      if (!groupedEvents.hasOwnProperty(e.date)) {
        groupedEvents[e.date] = [];
      }
      groupedEvents[e.date].push(e);
    }

    //Creating html
    for (let k in groupedEvents) {
      if (groupedEvents.hasOwnProperty(k)) {
        html.push(<h2 className='is-size-3' key={'date_' + k}>{new Date(k).toDateString()}</h2>);
        for (let e of groupedEvents[k]) {
          html.push(<p key={'event_' + e.id}>{new Date(e.date + 'T' + e.time).toLocaleTimeString('en-US')}, booked by {e.booked_by ? e.booked_by.name : ''}</p>)
        }
      }
    }
    return html
  }

  render() {
    return (
      <div>
        <h1 className='is-size-1'>{this.props.name}</h1>
        {this.eventsList()}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  name: state.auth.name,
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
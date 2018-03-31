import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  userEvents
} from '../actions/users';
import TimeSlots from '../components/TimeSlots';
import utils from '../Utils';

class UserEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      user: this.props.users.find((user) => {
        return (parseInt(user.id, 0) === parseInt(this.props.match.params.id, 0));
      })
    }

    this.nextDay = this.nextDay.bind(this);
    this.prevDay = this.prevDay.bind(this);
    this.events = this.events.bind(this);
  }

  componentWillMount() {
    this.props.userEvents(this.props.match.params.id, this.state.date);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.date !== this.state.date) {
      this.props.userEvents(this.props.match.params.id, this.state.date);
    }
  }

  nextDay() {
    this.setState({
      date: new Date(this.state.date.getTime() + (24 * 60 * 60 * 1000))
    });
  }

  prevDay() {
    this.setState({
      date: new Date(this.state.date.getTime() - (24 * 60 * 60 * 1000))
    })
  }

  events() {
    return (this.state.user && this.state.user.hasOwnProperty('events')) ? this.state.user.events.filter((event) => {
      return event.date === utils.formatDate(this.state.date)
    }) : [];
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <div className="has-text-centered">
          <button className="button is-link" onClick={this.prevDay}>prev</button>
          <span>{this.state.date.toDateString()}</span>
          <button className="button is-link" onClick={this.nextDay}>next</button>
        </div>
        <div className="columns is-centered">
          <div className="column is-half is-narrow">
            <TimeSlots events={this.events()} />
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userEvents
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents);
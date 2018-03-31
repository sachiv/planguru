import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  usersLoad
} from '../actions/users';

class Users extends React.Component {
  componentDidMount() {
    this.props.usersLoad()
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.props.users.map(user =>
          <li key={user.id}>
            <Link to={'/users/' + user.id + '/events'}>
              {user.name}
            </Link>
          </li>
        )}
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
      usersLoad
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Users);
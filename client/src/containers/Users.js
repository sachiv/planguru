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
      <div className='container'>
        <div className="columns">
          <div className="column">
            <h1 className='is-size-1'>Users</h1>
            <ul>
              {this.props.users.map(user =>
                <li key={user.id} className='is-size-5'>
                  <Link to={'/users/' + user.id + '/events'}>
                    {user.name}
                  </Link>
                </li>
              )}
            </ul>
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
      usersLoad
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Users);
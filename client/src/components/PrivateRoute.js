import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />}
        />
    )
}

const mapStateToProps = state => ({
    authed: state.auth.authed
});

export default connect(mapStateToProps)(PrivateRoute);
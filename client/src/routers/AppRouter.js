import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import About from '../containers/About';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import Events from '../containers/Events';
import Users from '../containers/Users';
import UserEvents from '../containers/UserEvents';
import PrivateRoute from '../components/PrivateRoute';

const AppRouter = (props) => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <PrivateRoute path='/events' component={Events} />
            <PrivateRoute path='/users/:id/events' component={UserEvents} />
            <PrivateRoute path='/users' component={Users} />
        </Switch>
    );
}

export default AppRouter;
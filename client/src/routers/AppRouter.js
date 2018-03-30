import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import About from '../containers/About';
import Events from '../containers/Events';

const AppRouter = (props) => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/events" component={Events} />
        </Switch>
    );
}

export default AppRouter;
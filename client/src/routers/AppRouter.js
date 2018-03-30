import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/home';
import About from '../containers/about';

const AppRouter = (props) => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
        </Switch>
    );
}

export default AppRouter;
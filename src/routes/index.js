import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import Home from '../views/home';
import Generic from '../views/generic';
import NotFound from '../views/notFound';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/generic" exact={true} component={Generic} />

            <Route path="/not-found" exact={true} component={NotFound} />
            <Redirect path="*" to="not-found" />
        </Switch>
    </Router>
);

export default Routes;

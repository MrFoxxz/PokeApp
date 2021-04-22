import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './components/homepage'
import Container from './components/container'

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/pokelist" component={Container} />
        </Switch>
    );
}

export default Routes

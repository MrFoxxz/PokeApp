import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './components/homepage'
import Container from './components/container'
import PokeInfo from './components/PokeInfo'

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/pokelist" component={Container} />
            <Route exact path="/poke-info/:pokeIndex" component={PokeInfo}/>
        </Switch>
    );
}

export default Routes

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Token from '../pages/token';
import Principal from '../pages/principal';
import Album from '../pages/album';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Token} />
                <Route path="/principal" component={Principal} />
                <Route path="/album/:albumId" component={Album} />
            </Switch>
        </BrowserRouter>
    );
}

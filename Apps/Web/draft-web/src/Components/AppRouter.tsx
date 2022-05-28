import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import {publicRoutes, privateRoutes} from '../Router/Router';

export interface IAppRouterProps {
}

function AppRouter (props: IAppRouterProps) {
return (
    <Switch>
        {privateRoutes.map(route =>
            <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
        )}
        {publicRoutes.map(route =>
            <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
        )}

        <Redirect to='/posts'/>
    </Switch>
);
}

export default AppRouter;

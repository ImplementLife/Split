import { Switch, Redirect, Route } from 'react-router-dom';
import {publicRoutes, privateRoutes} from './Router';

function AppRouter () {
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

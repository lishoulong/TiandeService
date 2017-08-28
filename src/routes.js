import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import Service from './components/Service/Service';

const routes = (
    <Route>
        <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="/service" component={Service}/>
        </Route>
    </Route>
    );

export default routes;
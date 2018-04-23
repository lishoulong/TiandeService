import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import Service from './components/Service/Service';
import Influence from './components/IndustryInflu/IndustryInflu';
import News from './components/News/News';
import NewTian from './components/NewTian/NewTian';
import Employees from './components/Employees/Employees';

const routes = (
    <Route>
        <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="/service" component={Service}/>
                <Route path="/influence" component={Influence}/>
                <Route path="/news" component={News}/>
                <Route path="/newTian" component={NewTian}/>
                <Route path="/employees" component={Employees}/>
        </Route>
    </Route>
    );

export default routes;
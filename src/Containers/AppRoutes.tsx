import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import User from "./User"
import Admin from "./Admin"
import * as Routes from "../Lib/routes"
import NavBar from "./Navbar"
import Login from './Login';


const AppRoutes: React.FunctionComponent = () => (
    <Router>
        <NavBar />
        <Switch>
            <Route path={Routes.ADMIN} component={Admin} />
            <Route path={Routes.USER} component={User} />
            <Route path={Routes.LOGIN} component={Login} />
        </Switch>
    </Router>
)
export default AppRoutes;
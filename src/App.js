import React, { useEffect, useState } from 'react';
import { HomeDefault, Login, SignUp, PassRecover} from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './style/main.scss';

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomeDefault />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/signUp" exact>
                    <SignUp />
                </Route>
                <Route path="/passRecover" exact>
                    <PassRecover />
                </Route>
                
            </Switch>
        </Router>
    )
}

export default App;
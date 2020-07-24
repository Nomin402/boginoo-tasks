import React, { useEffect, useState } from 'react';
import { HomeDefault, Login, SignUp, PassRecover, Shortener, History } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './style/main.scss';
import {AuthContextProvider} from './provider/auth-user-provider';

const App = () => {

    return (
        <AuthContextProvider>
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
                    <Route path="/history" exact>
                        <History />
                    </Route>
                    <Route path="*">
                        <Shortener />
                    </Route>

                </Switch>
            </Router>
        </AuthContextProvider>
    )
}

export default App;
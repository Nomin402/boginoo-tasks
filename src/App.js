import React from 'react';
import { HomeDefault, Login } from './pages';
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
            </Switch>
        </Router>
    )
}

export default App;
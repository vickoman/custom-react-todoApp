import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../pages/_layouts/Auth";
import Main from "../pages/_layouts/Main";
import SignIn from "../pages/SignIn";
import SingUp from "../pages/SingUp";
import Home from "../pages/Home";

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth/:path?" exact>
                    <Auth>
                        <Switch>
                            <Route path="/auth/login" exact component={SignIn} />
                            <Route path="/auth/register"  component={SingUp} />
                        </Switch>
                    </Auth>
                </Route>
                <Route>
                    <Main>
                        <Switch>
                            <Route path="/" component={Home} />
                        </Switch>
                    </Main>
                </Route>
            </Switch>

        </Router>
    )
}

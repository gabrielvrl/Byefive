import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

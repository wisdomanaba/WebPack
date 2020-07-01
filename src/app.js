import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './pages/homePageComponent'

export default function app() {
    return (
        <Switch>
            <Route path="/" render={props => (
                <Home {...props} />
            )}/>
        </Switch>
    )
}

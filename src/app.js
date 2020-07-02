import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './pages/homePageComponent'
import About from './pages/aboutPageComponent'

export default function app() {
    return (
        <Switch>
            <Route path="/" render={props => (
                <Home {...props} />
            )}/>
            <Route path="/about" render={props => (
                <About {...props} />
            )}/>
        </Switch>
    )
}

import React from 'react'
import {BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom'

import Home from '../components/Home'
import Doctor from '../components/Doctor'
import PatientPage from '../components/PatientPage'
import NavBar from '../components/NavBar'

const RouterPage =  ( ) => {
    return (
        <BrowserRouter>
            <div>
            <NavBar />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/doctor" component={Doctor} />
                <Route path="/patient-page" component={PatientPage} />
               
            </Switch>
            </div>
        </BrowserRouter>
    )
} 

export default RouterPage

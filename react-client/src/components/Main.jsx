import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Profile from './UserStats.jsx';
import Home from './Home.jsx'

const Main = () => (
    <main>
        <Switch>
            <Route path='/SignUp' component={SignUp} />
            <Route path='/SignIn' component={SignIn} />
            <Route exact path='/' component={Landing} />
            <Route path='/UserStats' component={Profile} />
            <Route path='/Home' component={Home} />
        </Switch>
    </main>
)

export default Main;
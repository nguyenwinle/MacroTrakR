import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Profile from './UserStats.jsx';
import USDAsearch from './USDAsearch.jsx';

const Main = () => (
    <main>
        <Switch>
            <Route path='/UserStats' component={Profile} />
            <Route exact path='/' component={Landing} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/SignUp' component={SignUp} />
            <Route path='/USDAsearch' compononent={USDAsearch} />
        </Switch>
    </main>
)

export default Main;
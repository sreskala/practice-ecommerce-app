import React from 'react';
import {Switch, Route} from 'react-router-dom';

//styles
import './App.css';

import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';  



function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/shop' component={Shop}/>
                <Route exact path ='/sign-in' component={SignInAndSignUp} />
            </Switch>
        </div>
    );
}

export default App;

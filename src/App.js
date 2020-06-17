import React from 'react';
import {Switch, Route} from 'react-router-dom';

//styles
import './App.css';

import Homepage from './pages/homepage/Homepage';

const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/hats' component={HatsPage}/>
            </Switch>
        </div>
    );
}

export default App;

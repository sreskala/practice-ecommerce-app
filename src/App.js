import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';

//styles
import './App.css';

import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';  
import { setCurrentUser } from './redux/user/user.actions';



class App extends Component {
    
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()
                    })
                });
            } else {
                setCurrentUser(userAuth);
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
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
    
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);

import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//styles
import './App.css';

import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import CheckoutPage from './pages/checkout/CheckoutPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';  
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';



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
                    <Route path='/shop' component={Shop}/>
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route exact path ='/sign-in' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />) } />
                </Switch>
            </div>
        );
    }
    
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);

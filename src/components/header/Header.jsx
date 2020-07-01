import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/clothes.svg'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

//styles
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <h1 className="title">The Groovy Store</h1>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/contact" className="option">
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className="option"
                onClick = {() => auth.signOut()}
                >
                    SIGN OUT
                </div> :
                <Link to="/sign-in" className="option" >
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : (<CartDropdown />)
        }
        
    </div>

    //Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
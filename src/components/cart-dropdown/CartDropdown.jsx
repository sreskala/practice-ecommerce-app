import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

//styles
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                (cartItems.map(
                    item => (<CartItem key={item.id} item={item} /> )
                )) :
                   ( <span className="empty-message">Your cart is empty</span>)
            }
        </div>
        <CustomButton
        style={{ fontSize: '.65em'}}
        onClick = {() => {history.push('/checkout');
        dispatch(toggleCartHidden());
    }
        
    }
        >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
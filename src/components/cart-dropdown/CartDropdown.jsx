import React from 'react';

import CustomButton from '../custom-button/CustomButton';

//styles
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton
        style={{ fontSize: '.65em'}}
        >GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;
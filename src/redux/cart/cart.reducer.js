import { CartActionTypes } from './cart.types';
import { addItems } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const { 
    TOGGLE_CART_HIDDEN,
    ADD_ITEM
} = CartActionTypes;

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItems(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
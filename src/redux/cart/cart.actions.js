import { CartActionTypes } from './cart.types';

const { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_CART_ITEM, REMOVE_ITEM } = CartActionTypes;

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
    type: ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CLEAR_CART_ITEM,
    payload: item
})
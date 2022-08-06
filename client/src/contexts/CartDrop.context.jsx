import { createContext, useState, useEffect, useReducer } from "react";

export const CartContext = createContext({
    showCart: false,
    setOpenCart: () => { },
    cartItems: [],
    cartCount: 0,
    total: 0
});

const addItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const cartActionTypes = {
    SET_IS_CART_OPEN: " SET_IS_CART_OPEN",
    SET_CART_ITEMS: "SET_CART_ITEMS",
}

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case cartActionTypes.SET_IS_CART_OPEN:
            return {
                ...state,
                showCart: payload
            }
        case cartActionTypes.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        default:
            throw new Error(`Error in ${type} found in Cart Reducer`)
    }
}

const initialState = {
    showCart: false,
    cartItems: [],
    cartCount: 0,
    total: 0
}


export const CartProvider = ({ children }) => {
    const [{ showCart, cartItems, total, cartCount }, dispatch] = useReducer(cartReducer, initialState);

    const updateCartReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItems) => total + cartItems.quantity, 0);
        const newTotal = newCartItems.reduce((total, cartItems) => total+ cartItems.quantity * cartItems.price);
        dispatch({ type: cartActionTypes.SET_CART_ITEMS, payload: { cartCount: newCartCount, total: newTotal, cartItems: newCartItems } });
    }

    const addItemToCart = (productToAdd) =>{
        const newCartItems =  addItem(cartItems, productToAdd);
        updateCartReducer(newCartItems);
    }

    const setShowCart = (bool) => {
        dispatch({ type: cartActionTypes.SET_IS_CART_OPEN, payload: bool});
    }

    const val = {
        showCart,
        setShowCart,
        cartItems,
        cartCount,
        total,
        addItemToCart,
    }

    return (
        <CartContext.Provider value={val}>
            {children}
        </CartContext.Provider>
    )
}
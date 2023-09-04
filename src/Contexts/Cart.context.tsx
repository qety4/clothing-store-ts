
import { createContext, useReducer} from "react";



type CartItemsPayload ={
    cartItems:CartItem[],
    cartCount:number,
    cartTotal:number
}
type CartState = CartItemsPayload

let INITIAL_STATE:CartState = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

const cartLocalStorage = localStorage.getItem('cart')

if (cartLocalStorage) {
    const cart = JSON.parse(localStorage.getItem('cart')!)
    
    INITIAL_STATE = {
        isCartOpen: false,
        ...cart
    }
}

export const CartContext = createContext({
    ...INITIAL_STATE,
    addToCart: (cartItem:CartItem) => { },
    deleteItem: (cartItem:CartItem) => { },
    reduceQt: (cartItem:CartItem) => { },
})


export const enum CART_ACTION_TYPES{
    SET_CART_ITEMS,
}

type CartAction = {
    type: CART_ACTION_TYPES,
    payload: CartItemsPayload
}



export const cartReducer = (state:typeof INITIAL_STATE, action:CartAction): typeof INITIAL_STATE => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }

}


const addCartItem = (cartItems:CartItem[], item:CartItem) => {
    console.log(cartItems)
    const exists = cartItems.find(
        (cartItem) => cartItem.id === item.id
    );

    if (exists) {
        return cartItems.map(
            (cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity! + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...item, quantity: 1 }]
}


const removeCartItem = (cartItems:CartItem[], item:CartItem) => {

    const exists = cartItems.find(
        (cartItem) => cartItem.id === item.id
    );
    if (exists?.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== item.id)
    }
    return cartItems.map(
        (cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity! - 1 }
            : cartItem
    )

}



export const CartProvider = ({ children }:ChildrenType) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const { cartItems, cartCount, cartTotal } = state

    const updateCartReducer = (newCartItems:CartItem[]) => {
        console.log(newCartItems)
        const newCartCount = newCartItems.reduce((total, item) => total + item.quantity!, 0)
        const newCartTotal = newCartItems.reduce((total, item) => total + Number(item.price) * item.quantity!, 0)
        const cart = {
            cartItems: newCartItems,
            cartTotal: newCartTotal,
            cartCount: newCartCount
        }
        localStorage.setItem('cart', JSON.stringify(cart))

        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: {
                ...cart,
            }

        })
    }

    // const setIsCartOpen = (bool:boolean) => {
    //     dispatch({
    //         type: CART_ACTION_TYPES.SET_CART_OPEN,
    //         payload: {
    //            isCartOpen: bool
    //         }
    //     })
    // }

    const addToCart = (cartItem:CartItem) => {
        const newCart = addCartItem(cartItems, cartItem)
        updateCartReducer(newCart)
    }

    const reduceQt = (cartItem:CartItem) => {
        const newCart = removeCartItem(cartItems, cartItem)
        updateCartReducer(newCart)
    }

    const deleteItem = (cartItem:CartItem) => {
        const newCart = cartItems.filter((item) => item.id !== cartItem.id)
        updateCartReducer(newCart)
    }




    const value = {
        addToCart,
        reduceQt,
        deleteItem,
        cartItems,
        cartCount,
        cartTotal
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
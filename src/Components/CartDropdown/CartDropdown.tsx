import React, { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Contexts/Cart.context'
import './cartDropdown.styles.scss'
import CartSvg from '../CartSvg/CartSvg'
import CartItem from '../CartItem/CartItem'

const CartDropdown = () => {
    const {isCartOpen, setIsCartOpen, cartItems, cartTotal} = useContext(CartContext)

    const navigate = useNavigate()
    const cartToggle = ()=>{
        setIsCartOpen(!isCartOpen)
    }
    const goToCheckout = ()=>{
        cartToggle()
        navigate('/checkout')
    }

    return (
        <>
            <div className='cart-container' onClick={cartToggle}>
            <CartSvg/>
            </div>
            {
            isCartOpen &&
            <>
            <div className='cart-overlay' onClick={cartToggle}></div>
            <div className="cartdropdown-container">
                {
                    cartTotal === 0 ? 
                    <p className='cart items'>Cart Empty</p> 
                    :
                    <>
                    <div className='your-items'>YOUR ITEMS</div>
                    <div className='cart-items'>
                        {
                            cartItems.map((item,index)=>
                                <CartItem key={index} item={item}/>
                            )
                            
                        }
                    </div>
                    <button onClick={goToCheckout} className='cart-checkout-btn'>CHECKOUT</button>
                    </>
                }
            </div>
            </>
            }
        </>
    )
}

export default CartDropdown
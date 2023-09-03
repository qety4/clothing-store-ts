import React, { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Contexts/Cart.context'
import './cartDropdown.styles.scss'
import CartSvg from '../CartSvg/CartSvg'
import CartItem from '../CartItem/CartItem'
import { Popover } from '@headlessui/react'

const CartDropdown = () => {
    const { cartItems, cartTotal } = useContext(CartContext)

    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <>
            <Popover>

                <Popover.Button className='cart-open-btn'>
                        <CartSvg />
                </Popover.Button>

                <Popover.Panel className='cartdropdown-wrapper'>
                    <div className="cartdropdown-container">

                        {
                            cartTotal === 0 ?
                                <p className='cart items'>Cart Empty</p>
                                :
                                <>
                                    <div className='your-items'>YOUR ITEMS</div>
                                    <div className='cart-items'>
                                        {
                                            cartItems.map((item, index) =>
                                                <CartItem key={index} item={item} />
                                            )

                                        }
                                    </div>
                                    <button onClick={goToCheckout} className='cart-checkout-btn'>CHECKOUT</button>
                                </>
                        }
                    </div>
                </Popover.Panel>
            </Popover>
        </>
    )
}

export default CartDropdown
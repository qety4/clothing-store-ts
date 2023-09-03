import React, { Fragment, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Contexts/Cart.context'
import './cartDropdown.styles.scss'
import CartSvg from '../CartSvg/CartSvg'
import CartItem from '../CartItem/CartItem'
import { Popover } from '@headlessui/react'
import { motion } from 'framer-motion'

const CartDropdown = () => {
    const btn = useRef<HTMLButtonElement | null>(null)
    const { cartItems, cartTotal } = useContext(CartContext)

    const navigate = useNavigate()

    const goToCheckout = () => {
        close()
        navigate('/checkout')
    }
    const close = () => {
        if (btn.current)
            btn.current.click()
        return
    }

    return (
        <>
            <Popover>

                <Popover.Button ref={btn} className='cart-open-btn'>
                    <CartSvg />
                </Popover.Button>

                <Popover.Panel as={motion.div}
                    variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.58, delay: 0 }}
                >

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
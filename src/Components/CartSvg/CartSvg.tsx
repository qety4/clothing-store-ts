import { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart.context'
import cart from '../../assets/svgs/bag.svg'
import './cartSvg.styles.scss'

const CartSvg = () => {
    const { cartCount } = useContext(CartContext)
    const count = cartCount
    return (
        <>
            <div className='cart-container'>
                <p className='cart-count'>{count}</p>
                <img className='cart' src={cart} alt="" />
            </div>

        </>
    )
}

export default CartSvg
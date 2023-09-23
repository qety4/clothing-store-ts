import { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart.context'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem'
import './checkout.styles.scss'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    const navigate = useNavigate()
    const goToPay = () => {
        navigate('/pay')
    }
    return (
        <div className='checkout-page'>

            <p className='checkout-title'>CHECK OUT</p>
            <div className='checkout-items'>
                {
                    cartItems.map((item, index) =>
                        <CheckoutItem key={`${item.title}-${item.id}`} item={item} />
                    )
                }
            </div>
            {cartItems.at(0) &&
                <>
                    <p className='checkout-total'>{cartTotal}€ Total</p>
                    <div className='pay-btn-container'>
                        <button onClick={goToPay} className='pay-btn'>PAY</button>
                    </div>
                </>
            }
        </div>
    )
}

export default Checkout
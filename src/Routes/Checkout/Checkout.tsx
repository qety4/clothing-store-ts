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
            <div className='checkout-area'>
                <div className='items-desc'>
                    <p className='items-desc-product'>
                        Product
                    </p>
                    <span>
                        <p>
                            Price
                        </p>
                        <p>
                            Quantity
                        </p>
                        <p>
                            Total
                        </p>
                    </span>
                </div>
                <div className='checkout-items'>
                    {
                        cartItems.map((item, index) =>
                            <div key={index} className='checkout-item'>
                                <CheckoutItem item={item} />
                            </div>
                        )
                    }
                </div>
            </div>
            {cartItems.at(0) &&
                <>
                    <p className='checkout-total'>{cartTotal}€ Total</p>
                    <button onClick={goToPay} className='pay-page-button'>PAY</button>
                </>
            }
        </div>
    )
}

export default Checkout
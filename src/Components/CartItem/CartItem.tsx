import React from 'react'
import './cartItem.styles.scss'


const CartItem = ({item}:{item:CartItem}) => {
    const {url,title,quantity,price} = item

    return (
        <div className='cart-item-container'>
            <img className='cart-item-img' src={url} alt={`${title}`} />
            <div className='item-details'>
                <span className='name'>{title.toUpperCase()}</span>
                <span className='price'>{price}€*{quantity}</span>
            </div>
        </div>
    )
}

export default CartItem
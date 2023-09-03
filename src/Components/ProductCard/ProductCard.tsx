import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart.context'
import './productCard.styles.scss'
import { useNavigate } from 'react-router-dom'
import ProductReveal from '../Reveal/ProductReveal'

const ProductCard = ({ item,
    homePage
}: {
    item: CartItem,
    homePage: boolean
}) => {
    const { addToCart, cartItems } = useContext(CartContext)
    const navigate = useNavigate()
    const { url, title, about, price } = item

    const addItemToCart = () => {
        addToCart(item)
        console.log(item)
        console.log(cartItems)
    }
    const itemPage = () => {
        navigate(`/shop/${item.id}`)
    }

    return (
        <>
            <ProductReveal homePage={homePage}>
                <div className='featured-product-container' >
                    <img className='product-image' src={url} onClick={itemPage} alt="" />
                    <div className='product-text-desc'>
                        <div className='title-price'>
                            <p className="product-title">
                                {title.toUpperCase()}
                            </p>
                            <p className="product-price">
                                {price}€
                            </p>
                        </div>
                        <p className="product-about">
                            {about}
                        </p>
                    </div>
                    <button className='add-to-cart-btn' onClick={() => addItemToCart()}>ADD TO CART</button>
                </div>
            </ProductReveal>

        </>
    )
}

export default ProductCard
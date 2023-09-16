import React, { useContext } from 'react'
import { products } from '../../assets/all-products/allProducts'
import { useParams } from 'react-router-dom'
import './shopProduct.styles.scss'
import { CartContext } from '../../Contexts/Cart.context'
import Button, { ButtonTypes } from '../../Components/Button/Button'

function ShopProduct() {
  const { itemId } = useParams()
  const { addToCart } = useContext(CartContext)
  const product: CartItem | undefined = products.find((item) => item.id === Number(itemId))
  if (!product)
    return null

  const { url, title, price, about } = product

  const addItemToCart = () => {
    addToCart(product)
  }

  return (
    <>
      {
        product &&
        <div className='product-page'>
          <div className='product-page__product'>
            <div className='product-image-container'>
              <img className='product-image' src={url} alt="" />
            </div>
            <div className='product-btn-container'>
              <Button type={ButtonTypes.RoundedBtnM} onClick={addItemToCart}>Add to Cart</Button>
            </div>
            <div className='product-text-container'>
              <div className='title-price'>
                <div className='product-text-title'>
                  <p>{title}</p>
                </div>
                <div className='product-text-price'>
                  <p>{price}€</p>
                </div>
              </div>
              <div className='product-text-about'>
                <p>{about}</p>
              </div>
            </div>
          </div>
        </div >
      }
    </>
  )
}

export default ShopProduct
import React from 'react'
import { products } from '../../assets/all-products/allProducts'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useParams } from 'react-router-dom'
import './shopProduct.styles.scss'
function ShopProduct() {
  const { itemId } = useParams()
  const product = products.find((item) => item.id == Number(itemId))
  console.log(product)
  return (
    <>
      {
        product &&
        <div className='product-page'>
          <div className='product-page__product'>
            <ProductCard item={product} />
          </div>
        </div>
      }
    </>
  )
}

export default ShopProduct
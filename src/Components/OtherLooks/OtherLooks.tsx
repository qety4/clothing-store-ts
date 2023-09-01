import React from 'react'
import './otherlooks.styles.scss'
import { otr } from '../../assets/other-looks/otherLooks'
import ProductCard from '../ProductCard/ProductCard'

const OtherLooks = () => {
  return (
    <div className='otr-grid'>
      <div className='look-items'>
        {
          otr.map((item, index) => {
            if (index < 4) {
              return (
                <ProductCard key={item.title} item={item} />
              )
            }
            return null
          })
        }
      </div>
      <div className='look-pic-container'>
        <img className='look-pic'  alt="" />
      </div>
    </div>
  )
}

export default OtherLooks
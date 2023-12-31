import React from 'react'
import './otherlooks.styles.scss'
import { otr } from '../../assets/other-looks/otherLooks'
import ProductCard from '../ProductCard/ProductCard'
import ComponentReveal from '../../Components/Reveal/ComponentReveal'

const OtherLooks = () => {
  return (
    <ComponentReveal>
      <section className='other-looks-container'>
        <p className='other-looks-title'>
          OTHER LOOKS
        </p>
        <div className='otr-grid'>
          <div className='look-items'>
            {
              otr.map((item, index) => {
                if (index < 4) {
                  return (
                    <ProductCard homePage={true} key={item.title} item={item} />
                  )
                }
                return null
              })
            }
          </div>
          <div className='look-pic-container'>
            <img className='look-pic' alt="" />
          </div>
        </div>
      </section>
    </ComponentReveal>

  )
}

export default OtherLooks
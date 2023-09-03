import React, { useContext } from 'react'
import { SearchContext } from '../../Contexts/Search.context'
import { Listbox } from '@headlessui/react'
import './shopSelect.styles.scss'
import { motion } from 'framer-motion'

function ShopSelect() {
  const { handleChange } = useContext(SearchContext)

  return (
    <div className='shop-filter'>
      <Listbox value={''} onChange={handleChange}>
        <Listbox.Button className='select-btn'>FILTER</Listbox.Button>

        <Listbox.Options as={motion.div} className='shop-filter-select'
          variants={{
            hidden: { opacity: 0, y: -4 },
            visible: { opacity: 1, y: 0 }
          }}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.38, delay: 0 }}
        >

          <Listbox.Option className='shop-filter-option' value="t-shirts" >
            t-shirts
          </Listbox.Option>

          <Listbox.Option className='shop-filter-option' value="jackets">
            jackets
          </Listbox.Option>

          <Listbox.Option className='shop-filter-option' value="pants">
            pants
          </Listbox.Option>

          <Listbox.Option className='shop-filter-option' value="sneakers">
            sneakers
          </Listbox.Option>

          <Listbox.Option className='shop-filter-option' value="hats">
            hats
          </Listbox.Option>

          <Listbox.Option className='shop-filter-option' value="">
            SHOP ALL
          </Listbox.Option>

        </Listbox.Options>
      </Listbox>
    </div >
  )
}

export default ShopSelect
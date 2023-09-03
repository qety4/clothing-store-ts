import React, { useContext } from 'react'
import { SearchContext } from '../../Contexts/Search.context'
import { Listbox } from '@headlessui/react'
import './shopSelect.styles.scss'

function ShopSelect() {
  const { handleChange } = useContext(SearchContext)

  return (
    <div className='shop-filter'>
      <Listbox value={''} onChange={handleChange}>
        <Listbox.Button className='select-btn'>FILTER</Listbox.Button>

        <Listbox.Options className='shop-filter-select'>

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
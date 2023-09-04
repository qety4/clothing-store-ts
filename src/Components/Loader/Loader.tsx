import React from 'react'
import { MoonLoader } from 'react-spinners'
import './loader.styles.scss'

function Loader() {
  return (
    <div className='loader'>
        <MoonLoader/>
    </div>
  )
}

export default Loader
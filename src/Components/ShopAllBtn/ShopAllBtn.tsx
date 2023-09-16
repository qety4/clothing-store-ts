import './shopAllBtn.styles.scss'
import React from 'react'
import Button, { ButtonTypes } from '../../Components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { SearchContext } from '../../Contexts/Search.context'
import ComponentReveal from '../../Components/Reveal/ComponentReveal'

function ShopAllBtn() {
    const navigate = useNavigate()
    const { searchReset } = useContext(SearchContext)
    const shopAll = () => {
        navigate('/shop')
        searchReset()
    }

    return (
        <ComponentReveal>
            <div className='shop-all-btn-container'>
                <Button type={ButtonTypes.RoundedBtnL} onClick={shopAll} >
                    SHOP ALL
                </Button>
            </div>
        </ComponentReveal>
    )
}

export default ShopAllBtn
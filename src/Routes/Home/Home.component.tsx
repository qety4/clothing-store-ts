import './home.styles.scss'
import AboutFooter from '../../Components/AboutFooter/AboutFooter'
import Slider from '../../Components/VarietySlider/VarietySlider'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import OtherLooks from '../../Components/OtherLooks/OtherLooks'
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { SearchContext } from '../../Contexts/Search.context'

const Home = () => {
    const navigate= useNavigate()
    const {searchReset} = useContext(SearchContext)
    const shopAll = ()=>{
        navigate('/shop')
        searchReset()
    }

    return (

        <div className='home'>
            <p className='variety-title'>
                VARIETY
            </p>
            <div className='slider-home'>
                <Slider />
            </div>
            <div className='featured-products-title'>
                FEATURED PRODUCTS
            </div>
            <div className='featured-products-home-container'>
                <FeaturedProducts />
            </div>
            <div className='other-title'>
                OTHER LOOKS
            </div>
            <div className='other-looks-container'>
                <OtherLooks />
            </div>
            <div className='shop-all-btn-container'>
                <button onClick={shopAll} className='shop-all-btn'>
                    SHOP ALL
                </button>
            </div>
            <AboutFooter/>
        </div>
    )
}

export default Home
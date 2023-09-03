import './home.styles.scss'
import AboutFooter from '../../Components/AboutFooter/AboutFooter'
import Slider from '../../Components/VarietySlider/VarietySlider'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import OtherLooks from '../../Components/OtherLooks/OtherLooks'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { SearchContext } from '../../Contexts/Search.context'

const Home = () => {
    const navigate = useNavigate()
    const { searchReset } = useContext(SearchContext)
    const shopAll = () => {
        navigate('/shop')
        searchReset()
    }

    return (

        <div className='home'>

            <div className='slider-home'>
                <p className='variety-title'>
                    VARIETY
                </p>
                <Slider />
            </div>

            <div className='featured-products-home-container'>
                <p className='featured-products-title'>
                    FEATURED PRODUCTS
                </p>
                <FeaturedProducts />
            </div>

            <div className='other-looks-container'>
                <div className='other-looks-title'>
                    OTHER LOOKS
                </div>
                <OtherLooks />
            </div>

            <div className='shop-all-btn-container'>
                <button onClick={shopAll} className='shop-all-btn'>
                    SHOP ALL
                </button>
            </div>

            <AboutFooter />
        </div>
    )
}

export default Home
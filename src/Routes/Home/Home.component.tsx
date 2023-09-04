import './home.styles.scss'
import AboutFooter from '../../Components/AboutFooter/AboutFooter'
import Slider from '../../Components/VarietySlider/VarietySlider'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import OtherLooks from '../../Components/OtherLooks/OtherLooks'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { SearchContext } from '../../Contexts/Search.context'
import ComponentReveal from '../../Components/Reveal/ComponentReveal'
import Button, { ButtonTypes } from '../../Components/Button/Button'


const Home = () => {
    const navigate = useNavigate()
    const { searchReset } = useContext(SearchContext)
    const shopAll = () => {
        navigate('/shop')
        searchReset()
    }

    return (

        <div className='home'>
            <ComponentReveal>
                <div className='slider-home'>
                    <p className='variety-title'>
                        VARIETY
                    </p>
                    <Slider />
                </div>
            </ComponentReveal>
            <ComponentReveal>
                <div className='featured-products-home-container'>
                    <p className='featured-products-title'>
                        FEATURED PRODUCTS
                    </p>
                    <FeaturedProducts />
                </div>
            </ComponentReveal>
            <ComponentReveal>
                <div className='other-looks-container'>
                    <div className='other-looks-title'>
                        OTHER LOOKS
                    </div>
                    <OtherLooks />
                </div>
            </ComponentReveal>
            <ComponentReveal>
                <div className='shop-all-btn-container'>
                    <Button type={ButtonTypes.RoundedBtnL} onClick={shopAll} >
                        SHOP ALL
                    </Button>
                </div>
            </ComponentReveal>

            <AboutFooter />
        </div>
    )
}

export default Home
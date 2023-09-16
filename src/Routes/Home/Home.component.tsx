import AboutFooter from '../../Components/AboutFooter/AboutFooter'
import Slider from '../../Components/VarietySlider/VarietySlider'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import OtherLooks from '../../Components/OtherLooks/OtherLooks'
import ShopAllBtn from '../../Components/ShopAllBtn/ShopAllBtn'


const Home = () => {
    console.log(process.env.REACT_APP_KEY)
    return (
        <main className='home'>

            <Slider />

            <FeaturedProducts />

            <OtherLooks />

            <ShopAllBtn/>

            <AboutFooter />
            
        </main>
    )
}

export default Home
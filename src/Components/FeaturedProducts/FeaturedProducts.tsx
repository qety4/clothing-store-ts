import './featuredProducts.styles.scss'
import ProductCard from '../ProductCard/ProductCard'
import { products } from '../../assets/featured-product/featuredProduct'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-scroll'

const FeaturedProducts = () => {
    // const [currentIndex, setIndex] = useState(0)
    const scroll = useRef<HTMLDivElement | null>(null)

    // const prevSlide = () => {
    //     currentIndex === 0 ?
    //         setIndex(products.length - 1) :
    //         setIndex(currentIndex - 1)
    // }

    // const nextSlide = () => {
    //     currentIndex === products.length - 1 ?
    //         setIndex(0) : setIndex(currentIndex + 1)
    // }
    const scrollNext = () => {
        if (!scroll.current)
            return
        scroll.current.scrollBy({
            left:window.innerWidth,
            behavior: 'smooth'
        })
    }
    const scrollPrev = () => {
        if (!scroll.current)
            return
        scroll.current.scrollBy({
            left:-window.innerWidth,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <div className='scroll-btn left' onClick={scrollPrev}>
                {/* <Link to={`featured-product-${currentIndex}`} spy={true} smooth={true} offset={50} duration={500}> */}
                <ChevronLeft className='chevron-scroll' />
                {/* </Link> */}
            </div>

            <div className="products-scroll snaps-inline" ref={scroll}>

                {
                    products.map((item, index) => {
                        return (
                            <div key={`${item.id}-${index}`} id={`featured-product-${index}`}>
                                <ProductCard item={item} />
                            </div>
                        )
                    })
                }

            </div>

            <div className='scroll-btn right' onClick={scrollNext}>
                {/* <Link to={`featured-product-${currentIndex}`} spy={true} smooth={true} offset={50} duration={500}> */}
                <ChevronRight className='chevron-scroll' />
                {/* </Link> */}

            </div>

        </>
    )
}
export default FeaturedProducts
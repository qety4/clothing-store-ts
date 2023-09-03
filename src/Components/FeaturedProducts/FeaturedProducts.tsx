import './featuredProducts.styles.scss'
import ProductCard from '../ProductCard/ProductCard'
import { products } from '../../assets/featured-product/featuredProduct'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useRef } from 'react'

const FeaturedProducts = () => {
    const scroll = useRef<HTMLDivElement | null>(null)

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
                <ChevronLeft className='chevron-scroll' />
            </div>

            <div className="products-scroll snaps-inline" ref={scroll}>

                {
                    products.map((item, index) => {
                        return (
                            <div key={`${item.id}-${index}`} id={`featured-product-${index}`}>
                                <ProductCard homePage={true} item={item} />
                            </div>
                        )
                    })
                }

            </div>

            <div className='scroll-btn right' onClick={scrollNext}>
                <ChevronRight className='chevron-scroll' />
            </div>

        </>
    )
}
export default FeaturedProducts
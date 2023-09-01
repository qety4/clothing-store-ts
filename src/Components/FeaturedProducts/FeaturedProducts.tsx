import './featuredProducts.styles.scss'
import ProductCard from '../ProductCard/ProductCard'
import { products } from '../../assets/featured-product/featuredProduct'

const FeaturedProducts = () => {


    return (
        <>

            <div className="products-scroll snaps-inline">
                {
                    products.map((item,index) => {
                        return (
                         <ProductCard key={`${item.id}-${index}`} item={item}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default FeaturedProducts
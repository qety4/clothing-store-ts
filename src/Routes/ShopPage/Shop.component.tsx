import React from 'react'
import './shop.styles.scss'
import { SearchContext } from '../../Contexts/Search.context'
import { useContext } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { products } from '../../assets/all-products/allProducts'

const Shop = () => {
    const { searchValue, handleChange } = useContext(SearchContext)
    
    const searchedProducts = searchValue.replace(/\s+/g, "") === '' ?
        undefined
        :
        products.filter((item) =>{
                if(item.title.toLowerCase().replace(/\s+/g, "").includes(searchValue.toLowerCase().replace(/\s+/g, "").slice(0, searchValue.length - 1) ) || item.about.toLowerCase().replace(/\s+/g, "").includes(searchValue.replace(/\s+/g, "").toLowerCase()) || item.price.toLowerCase().replace(/\s+/g, "").includes(searchValue.replace(/\s+/g, "").toLowerCase())){
                    if (searchValue.replace(/\s+/g, "") !== ""){
                    return item}
                    else{
                        return undefined
                    }
                }
                else{
                    return undefined
                }
        })
    
    return (
        <div className="shop">
            <div className='shop-filter'>
                <select onChange={handleChange} className='shop-filter-select'>
                    <option value="" disabled >
                        FILTER
                    </option>
                    <option value="t-shirt">
                        t-shirts
                    </option>
                    <option value="jacket">
                        jackets
                    </option>
                    <option value="pants">
                        pants
                    </option>
                    <option value="sneakers">
                        sneakers
                    </option>
                    <option value="hats">
                        hats
                    </option>
                    <option value="">
                        SHOP ALL
                    </option>
                </select>
            </div>

            {
                searchedProducts != undefined ? 
                    <div className='searched-items'>
                        <p className='search-title'>search results for {searchValue}</p>

                        <div className='shop-products-container'>
                            {
                                searchedProducts?.map((item,index) => {

                                    return <ProductCard key={`${item.id}-${index}`} item={item} />

                                })
                            }
                        </div>

                    </div>
                :
                ""     
            }
            <>
                <p className="shop-title">
                    SHOP ALL
                </p>

                <div className='shop-products-container'>
                    {
                        products.map((item,index) => {
                            return <ProductCard item={item} key={`${item.id}-${index}`} />
                        })
                    }
                </div>
            </>
        </div>
    )
}
export default Shop
import { useContext } from "react"
import './checkoutItem.styles.scss'
import { CartContext } from "../../Contexts/Cart.context"

const CheckoutItem = ({ item }: { item: CartItem }) => {

    const { url, title, quantity, price } = item
    const { reduceQt, addToCart, deleteItem } = useContext(CartContext)
    const delItem = () => deleteItem(item)
    const addItem = () => addToCart(item)
    const removeItem = () => reduceQt(item)
    return (
        <div className="checkout-item">

            <div className="image-container">
                <img src={url} alt="" />
            </div>

            <span className="name">{title}</span>

            <div className="ltr-container">


                <p className="price">{price}€</p>

                <span className="quantity">
                    <div className="arrow" onClick={removeItem} >
                        -
                    </div>
                    <p className="value">{quantity}</p>
                    <div className="arrow" onClick={addItem}>
                        +
                    </div>
                </span>


                <p className="item-total">{Number(price) * quantity!}€</p>

                <div onClick={delItem} className="remove-button">
                    &#10005;
                </div>

            </div>

        </div>
    )
}

export default CheckoutItem
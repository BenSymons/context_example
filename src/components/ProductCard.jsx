import { useContext } from "react"
import BasketContext from "../utils/AppContext"

const ProductCard = ({product}) => {
    const {setBasket} = useContext(BasketContext)
    const {name, price, img, id} = product

    const handleAdd = () => {
        setBasket(prev => [...prev, product])
    }
    return (
        <div className="product-card">
            <img className="product-image" src={img}/>
            <div className="product-details">
                <div>
                    <p>{name}</p>
                    <p>£{price}</p>
                </div>
                <button onClick={handleAdd}>Add to Basket +</button>
            </div>
        </div>
    )
}

export default ProductCard
import { useContext } from "react"
import BasketContext from "../utils/basketContext"

const ProductCard = ({product}) => {
    const {name, price, img, id} = product
    const { setBasket } = useContext(BasketContext)
    
    const handleAdd = () => {
        setBasket((prev) => [...prev, product])
    }


    return (
        <div className="product-card">
            <img className="product-image" src={img} alt={name}/>
            <div className="product-details">
                <div>
                    <p>£{price}</p>
                </div>
                <button onClick={handleAdd}>Add to Basket +</button>
            </div>
        </div>
    )
}

export default ProductCard
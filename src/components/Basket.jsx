import { useContext } from "react"
import BasketContext from "../utils/AppContext"

const Basket = () => {
    const {basket, setBasket} = useContext(BasketContext)

    const handleRemove = (product, all) => {
        if (all) {
            setBasket([])
        } else {
            setBasket(prev => {
                const newBasket = prev.filter(item => {
                    return item.id !== product.id
                })
                return newBasket
            })
        }
    }
    return (
        <div>
            <p className="subheading">Your Basket</p>
            <div className="basket">
            <button onClick={() => handleRemove({} ,true)}>Remove All</button>
                {basket.length === 0 ? <p>There are no items in your Basket</p> : (
                    basket.map(item => {
                        const {name, id, img, price} = item
                        return (
                            <div className="basket-item">
                                <img className="thumbnail" src={img}/>
                                <p>{name}</p>
                                <p>{price}</p>
                                <button onClick={() => handleRemove(item, false)}>remove</button>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Basket
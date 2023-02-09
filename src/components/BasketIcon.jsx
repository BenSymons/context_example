import {IoCartOutline} from "react-icons/io5"
import { Link } from "react-router-dom"
import { useContext } from "react"
import BasketContext from "../utils/basketContext"

const BasketIcon = () => {
    const {basket} = useContext(BasketContext)
    return (
        <div className="basket-button">
            <Link to="/basket">
                <div className="notification">
                    {basket.length}
                </div>
                <IoCartOutline/>
            </Link>
        </div>
    )
}

export default BasketIcon
import {IoCartOutline} from "react-icons/io5"
import { Link } from "react-router-dom"

const BasketIcon = () => {
    return (
        <div className="basket-button">
            <Link to="/basket">
                <div className="notification">
                    0
                </div>
                <IoCartOutline/>
            </Link>
        </div>
    )
}

export default BasketIcon
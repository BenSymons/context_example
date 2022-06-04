import {FcShop} from "react-icons/fc"
import BasketIcon from "./BasketIcon"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div>
                <div className="shop-icon">
                    <Link to="/">
                        <FcShop/>
                    </Link>
                </div>
                <p className="header-item">Shop.com</p>
            </div>
            <div>
                <p className="header-item">About</p>
                <p className="header-item">Account</p>
                <BasketIcon/>
            </div>
        </div>
    )
}

export default Header
import ProductCard from "./ProductCard"
import product_data from "../data/product_data.json"

const ProductsList = () => {
    return (
        <>
        <p className="subheading">Home</p>
            <div className="products-container">
                {product_data.map(product => {
                return <ProductCard product={product}/>
                })}
            </div>
        </>
    )
}

export default ProductsList
const ProductCard = ({product}) => {
    const {name, price, img, id} = product

    const handleAdd = () => {
        console.log("added")
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
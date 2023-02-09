const Basket = () => {
    const handleRemove = (product, all) => {
        console.log("removing")
    }
    return (
        <div>
            <p className="subheading">Your Basket</p>
            <div className="basket">
            <button onClick={() => handleRemove({} ,true)}>Remove All</button>
                {[].length === 0 ? <p>There are no items in your Basket</p> : (
                    [].map(item => {
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
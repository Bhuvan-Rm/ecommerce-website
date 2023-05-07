import React from "react";
import productData from "../data/DummyProduct";

 function Product() {
    const productsArr = productData.products

    const [count,setCount] = React.useState(0)

    function add(){
        setCount(prevCount => prevCount+1)
        console.log(count)
    }
    function remove(){
        setCount(prevCount => prevCount-1)
        console.log(count)
    }

    const productListPage = productsArr.map(product => {

        return (
            <div className="product-card" key={product.id}>
                <img src={product.thumbnail} alt={product.title} className="thumbnail" />
                <div className="product-details">
                    <a className="title" href="https://img.icons8.com/fluency/48/null/minus.png"><strong>{product.title}</strong></a>
                    <p className="price">{"$" + product.price}</p>
                    <p className="desc">{product.description}</p>
                </div>
                <div id="counter" className="counter">
                    <img src="https://img.icons8.com/fluency/48/null/minus.png" alt="minus-icon" onClick={remove}/>
                    <p id="count">{count}</p>
                    <img src="https://img.icons8.com/fluency/48/null/add.png" alt="plus-icon" onClick={add}/>
                </div>
                <p><button>Add to Cart</button></p>
            </div>
        )
    })

    return (
        <div className="product-container">
            {productListPage}
        </div>
    )
}

export default Product
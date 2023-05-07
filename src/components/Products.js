import React from "react";
import productData from "../data/DummyProduct";

export default function Product() {
    const productsArr = productData.products

    const productListPage = productsArr.map(product => {
        return (
            <div className="product-card">
                <img src={product.thumbnail} alt={product.title} className="thumbnail" />
                <div className="product-details">
                    <a className="title" href="#"><strong>{product.title}</strong></a>
                    <p className="price">{"$" + product.price}</p>
                    <p className="desc">{product.description}</p>
                </div>
                <div id="counter" className="counter">
                    <img src="https://img.icons8.com/fluency/48/null/minus.png" alt="add-icon" />
                    <p id="count">0</p>
                    <img src="https://img.icons8.com/fluency/48/null/add.png" alt="plus-icon" />
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
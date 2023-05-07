import React, { useState } from "react";
import productData from "../data/DummyProduct";

function Product(props) {
    const productsArr = productData.products


    const [productCount, setproductCount] = React.useState([{ id: 0, count: 0 }])

    // ✅ Find the first object that matches a condition
    function pCount(pid){
        return productCount.find(obj => {return obj.id === pid;});
    }
    // 

    function add(pid) {

        // ✅ Add an object to a state array
        const addObjectToArray = obj => {
            setproductCount(current => [...current,
            {
                id: pid,
                count: 1
            }
            ]);
        };
        // ✅ Update one or more objects in a state array
        const updateObjectInArray = () => {
            setproductCount(current =>
                current.map(obj => {
                    if (obj.id === pid) {
                        return { ...obj, count: obj.count + 1 };
                    }
                    return obj
                })

            );
        };

        // ✅ Find the first object that matches a condition
        const found = productCount.find(obj => {
            return obj.id === pid;
        });

        found ? updateObjectInArray() : addObjectToArray()
    }

    function remove(pid) {

        // ✅ Remove one or more objects from state array
        setproductCount(current =>
            current.filter(obj => {
                return obj.id !== pid;
            }),
        );

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
                    <img src="https://img.icons8.com/fluency/48/null/minus.png" alt="minus-icon" onClick={() => remove(product.id)} />
                    <p id="count">{pCount(product.id)? pCount(product.id).count : 0 }</p>
                    <img src="https://img.icons8.com/fluency/48/null/add.png" alt="plus-icon" onClick={() => add(product.id)} />
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
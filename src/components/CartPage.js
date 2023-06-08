import React from "react";


function CartPage() {

    return (
        <div >
            <h1>Your Cart</h1>
            <ul>
                <li>
                    <span>Product 1</span>
                    <span>$19.99</span>
                </li>
                <li>
                    <span>Product 2</span>
                    <span>$24.99</span>
                </li>
                <li>
                    <span>Product 3</span>
                    <span>$14.99</span>
                </li>
            </ul>
            <p>Total: $59.97</p>
            <a href="checkout.html">Proceed to Checkout</a>
        </div>
    )

}

export default CartPage;
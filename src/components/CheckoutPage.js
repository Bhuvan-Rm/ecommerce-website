import React from "react";


function CheckoutPage() {
    return (
        <div>
            <h1>Checkout</h1>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" required></input>
                <label for="email">Email:</label>
                <input type="email" id="email" required></input>
                <label for="address">Address:</label>
                <textarea id="address" required></textarea>
                <button type="submit">Place Order</button>
            </form>
        </div>
    )
}

export default CheckoutPage;
import React from "react";

export default function Header(){

    return (
        <header className="header">
            <img src="https://img.icons8.com/fluency/48/null/fast-cart.png" alt="ecommerce-logo" className="header--logo"/>
            <h1 className="header--title">E-commerce</h1>
            <input type="search" placeholder="search.." className="header--search"/>
        </header>
    )
}
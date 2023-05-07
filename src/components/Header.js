import React from "react";

function Header(){

    function search_item() {
        let input = document.getElementById('search-bar').value
        input=input.toLowerCase();
        let x = document.getElementsByClassName('product-card');
          
        for (let i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            }
            else {
                x[i].style.display="block";                 
            }
        }
    }

    return (
        <header className="header">
            <img src="https://img.icons8.com/fluency/48/null/fast-cart.png" alt="ecommerce-logo" className="header--logo"/>
            <h1 className="header--title">E-commerce</h1>
            <input type="search" placeholder="search.." className="header--search" id="search-bar" onInput={search_item}/>
        </header>
    )
}

export default Header
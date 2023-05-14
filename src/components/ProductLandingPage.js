// ProductLanding.js

import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../data/DummyProduct';
import '../ProductLandingPage.css'; // Import the CSS file
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductLandingPage = () => {
  const { id } = useParams();

  // Find the product based on the ID
  const product = productData.products.find((product) => product.id === parseInt(id));

  return (
    <div>
      {product && (
        <div className="product-landing" key={product.id}>
            
            <Carousel showThumbs={true}>
            {product.images.map((image, index) => (
              <div key={index} className='product-container'>
                <img src={image} alt={`Product ${index + 1}`}  className='image-container'/>
              </div>
            ))}
          </Carousel>
            <div className="product-details">
                <p className="product-price">{"$" + product.price}</p><br/>
                <p className="product-desc">{product.description}</p>
            </div>
            <p><button className='cart-landing'>Add to Cart</button></p>
        </div>
      )}
    </div>
  );
};

export default ProductLandingPage;

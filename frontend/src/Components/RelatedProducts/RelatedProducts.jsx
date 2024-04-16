import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./RelatedProducts.css";

const RelatedProducts = (props) => {
  const { products, currentCategory } = props;

  const shuffleData = () => {
    if (!Array.isArray(products)) return [];
    const filteredProducts = products.filter(product => product.category === currentCategory);
    const shuffledData = filteredProducts.slice().sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, 4);
  };

  const randomProducts = shuffleData();

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-item">
        {randomProducts.map((product, i) => (
          <div key={i}>
            {/* Wrap the image inside a Link component */}
            <Link to={`/product/${product.id}`}>
              <img onClick={window.scrollTo(0, 0)} src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>New Price: ${product.new_price}</p>

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
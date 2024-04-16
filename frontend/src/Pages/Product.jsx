import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Find the product with the matching productId
  const product = all_product.find((e) => e.id === Number(productId));

  // Check if product is undefined or null before rendering
  if (!product) {
    // Optionally, you can render a loading indicator or error message here
    return <div>Loading...</div>;
  }

  // Render the product details if product is defined
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
      {/* Pass products and currentCategory to RelatedProducts */}
      <RelatedProducts products={all_product} currentCategory={product.category} />
    </div>
  );
};

export default Product;

import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [mainImage, setMainImage] = useState(product.image);

    const handleImageClick = (imageSrc) => {
        setMainImage(imageSrc);
    };

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    {product.image && (
                        <img
                            src={product.image}
                            alt=''
                            onClick={() => handleImageClick(product.image)}
                        />
                    )}
                    {product.image2 && (
                        <img
                            src={product.image2}
                            alt=''
                            onClick={() => handleImageClick(product.image2)}
                        />
                    )}
                    {product.image3 && (
                        <img
                            src={product.image3}
                            alt=''
                            onClick={() => handleImageClick(product.image3)}
                        />
                    )}
                    {product.image4 && (
                        <img
                            src={product.image4}
                            alt=''
                            onClick={() => handleImageClick(product.image4)}
                        />
                    )}
                </div>
                <div className='productdisplay-img'>
                    {mainImage && (
                        <img
                            className='productdisplay-main-img'
                            src={mainImage}
                            alt=''
                        />
                    )}
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                {/* <div className='productdisplay-right-stars'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(122)</p>
                </div> */}
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-new'>
                        ${product.new_price}
                    </div>
                </div>
                <div className='productdisplay-right-description'>
                    <h3>Strain Type: {product.type}</h3>
                    <br />
                    <h3>Brand: {product.brand}</h3>
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Amount</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>1/8</div>
                        <div>1/4</div>
                    </div>
                </div>
                <button onClick={() => addToCart(product.id)}>
                    ADD TO STASH
                </button>
            </div>
        </div>
    );
};

export default ProductDisplay;

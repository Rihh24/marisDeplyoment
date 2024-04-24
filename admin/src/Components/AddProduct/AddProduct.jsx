import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../Assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        description: "",
        lineage: "",
        category: "flower",
        type: "",
        brand: "",
        new_price: "",
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };
    const imageHandler2 = (e) => {
        setImage2(e.target.files[0]);
    };
    const imageHandler3 = (e) => {
        setImage3(e.target.files[0]);
    };
    const imageHandler4 = (e) => {
        setImage4(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const Add_Product = async () => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('image2', image2);
        formData.append('image3', image3);
        formData.append('image4', image4);
        formData.append('name', productDetails.name);
        formData.append('description', productDetails.description);
        formData.append('lineage', productDetails.lineage);
        formData.append('category', productDetails.category);
        formData.append('type', productDetails.type);
        formData.append('brand', productDetails.brand);
        formData.append('new_price', productDetails.new_price);

        await fetch('http://localhost:4000/addproduct', {
            method: 'POST',
            body: formData,
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            // Handle response data
        });
    };

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product Name</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type Here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Description</p>
                <input value={productDetails.description} onChange={changeHandler} type="text" name="description" placeholder='Type Here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Strain Type</p>
                <input value={productDetails.type} onChange={changeHandler} type="text" name="type" placeholder='Type Here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Brand</p>
                <input value={productDetails.brand} onChange={changeHandler} type="text" name="brand" placeholder='Type Here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Lineage</p>
                <input value={productDetails.lineage} onChange={changeHandler} type="text" name="lineage" placeholder='Type Here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type Here' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="flower">Flower</option>
                    <option value="cartridges">Cartridges</option>
                    <option value="edibles">Edibles</option>
                    <option value="disposables">Disposables</option>
                    <option value="concentrates">Concentrates</option>
                    <option value="prerolls">Pre-Rolls</option>
                </select>
            </div>
            <div className='addproduct-all-images'>
                <div className="addproduct-itemfield">
                    <label htmlFor="file-input">
                        <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-img' alt="" />
                    </label>
                    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
                </div>
                <div className="addproduct-itemfield">
                    <label htmlFor="file-input-2">
                        <img src={image2 ? URL.createObjectURL(image2) : upload_area} className='addproduct-img' alt="" />
                    </label>
                    <input onChange={imageHandler2} type="file" name='image2' id='file-input-2' hidden />
                </div>
                <div className="addproduct-itemfield">
                    <label htmlFor="file-input-3">
                        <img src={image3 ? URL.createObjectURL(image3) : upload_area} className='addproduct-img' alt="" />
                    </label>
                    <input onChange={imageHandler3} type="file" name='image3' id='file-input-3' hidden />
                </div>
                <div className="addproduct-itemfield">
                    <label htmlFor="file-input-4">
                        <img src={image4 ? URL.createObjectURL(image4) : upload_area} className='addproduct-img' alt="" />
                    </label>
                    <input onChange={imageHandler4} type="file" name='image4' id='file-input-4' hidden />
                </div>
            </div>
            <button onClick={Add_Product} className='addproduct-btn'>Add</button>
        </div>
    );
};

export default AddProduct;

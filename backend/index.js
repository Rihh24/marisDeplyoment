// Import required modules
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

// Load environment variables
const { MONGODB_URI, PORT } = process.env;

// Database Connection With MongoDB
mongoose.connect(MONGODB_URI);

// Middleware setup
app.use(express.json());
app.use(cors());

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        cb(null, `${file.fieldname}_${uniqueSuffix}${extension}`);
    }
});

// Multer middleware to handle file uploads
const upload = multer({ storage: storage }).fields([
    { name: 'image', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
]);

// Serve static files from the upload directory
app.use('/images', express.static('upload/images'));

// Define Product schema
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: String,
    lineage: String,
    category: String,
    type: String,
    brand: String,
    image: String,
    image2: String,
    image3: String,
    image4: String,
    new_price: Number,
    old_price: Number,
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
});

// Endpoint to add a product
app.post('/addproduct', upload, async (req, res) => {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    try {
        // Construct image URLs
        const imageUrls = {
            image: req.files['image'] ? `http://localhost:${PORT}/images/${req.files['image'][0].filename}` : null,
            image2: req.files['image2'] ? `http://localhost:${PORT}/images/${req.files['image2'][0].filename}` : null,
            image3: req.files['image3'] ? `http://localhost:${PORT}/images/${req.files['image3'][0].filename}` : null,
            image4: req.files['image4'] ? `http://localhost:${PORT}/images/${req.files['image4'][0].filename}` : null,
        };

        // Create the product with image URLs
        const product = new Product({
            id: id,
            name: req.body.name,
            description: req.body.description,
            lineage: req.body.lineage,
            category: req.body.category,
            type: req.body.type,
            brand: req.body.brand,
            image: imageUrls.image,
            image2: imageUrls.image2,
            image3: imageUrls.image3,
            image4: imageUrls.image4,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        // Save the product to the database
        await product.save();

        // Send success response
        res.status(201).json({ success: true, product });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to fetch all products
app.get('/allproducts', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint for deleting a product
app.post('/removeproduct', async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        console.log("Removed");
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        console.error('Error removing product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint for fetching new collections
app.get('/newcollections', async (req, res) => {
    try {
        let products = await Product.find({});
        let newCollection = products.slice(1).slice(-8);
        console.log("NewCollection Fetched");
        res.send(newCollection);
    } catch (error) {
        console.error('Error fetching new collections:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint for adding to cart
app.post('/addtocart', async (req, res) => {
    // Your code for adding to cart
});

// Start the server
const port = PORT || 4000; // Use PORT from environment variable or default to 4000
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});

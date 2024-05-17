import { Product } from "../models/productSchema.js";

export const CreateProduct = async (req, res) => {
    try {
        const { name, description, price, countInStock, imageUrls, category, brand, rating, numReviews, reviews, dressStyle, sellCount } = req.body;

        if(!name || !description || !price || !countInStock || !imageUrls || !category || !brand || !rating || !numReviews || !reviews || !dressStyle || !sellCount) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        
        await Product.create({
            name,
            description,
            price,
            countInStock,
            imageUrls,
            category,
            brand,
            rating,
            numReviews,
            reviews,
            dressStyle,
            sellCount,
        });

        res.status(201).json({ message: "Product created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const searchProducts = async (req, res) => {
    try {
        const { searchQuery } = req.query;
        const products = await Product.find({ $or: [
            { name: { $regex: searchQuery, $options: "i" } },
            { description: { $regex: searchQuery, $options: "i" } }
        ]});
        res.json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, countInStock, imageUrls, category, brand, rating, numReviews, reviews, dressStyle, sellCount } = req.body;

        if(!name || !description || !price || !countInStock || !imageUrls || !category || !brand || !rating || !numReviews || !reviews || !dressStyle || !sellCount) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        await Product.findByIdAndUpdate(req.params.id, {
            name,
            description,
            price,
            countInStock,
            imageUrls,
            category,
            brand,
            rating,
            numReviews,
            reviews,
            dressStyle,
            sellCount,
        });

        res.status(201).json({ message: "Product updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category }); 
        res.json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}


export const getProductsByBrand = async (req, res) => {
    try {
        const products = await Product.find({ brand: req.params.brand }); 
        res.json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getProductsByDressStyle = async (req, res) => {
    try {
        const products = await Product.find({ dressStyle: req.params.dressStyle }); 
        res.json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getProductsByMostRating = async (req, res) => {
    try {
        const products = await Product.find().sort({ rating: -1 }).limit(10);
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getProductsByMostSellCount = async (req, res) => {
    try {
        const products = await Product.find().sort({ sellCount: -1 }).limit(10);
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getProductsByNewArrivals = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 }).limit(10);
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}


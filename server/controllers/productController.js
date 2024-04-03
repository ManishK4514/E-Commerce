import { Product } from "../models/productSchema";

export const CreateProduct = async (req, res) => {
    try {
        const { name, description, price, countInStock, imageUrls, category } = req.body;

        if(!name || !description || !price || !countInStock || !imageUrls || !category) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        
        await Product.create({
            name,
            description,
            price,
            countInStock,
            imageUrls,
            category
        });

        res.status(201).json({ message: "Product created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

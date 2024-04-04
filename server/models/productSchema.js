import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imageUrls: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    }, 
    brand: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    numReviews: {
        type: Number,
        required: true
    },
    reviews: {
        type: Array,
        required: true
    },
    dressStyle: {
        type: String,
        required: true
    },
    sellCount: {
        type: Number,
        required: true
    }
}, {timestamps: true});

export const Product = mongoose.model('Product', productSchema);
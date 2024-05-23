import express from 'express';
import isAuthenticated from '../config/auth.js';
import { CreateProduct, getProducts, searchProducts, getProductById, updateProduct, deleteProduct, getProductsByCategory, getProductsByBrand, getProductsByDressStyle, getProductsByMostSellCount, getProductsByMostRating, getProductsByNewArrivals, getProductsByFilter } from '../controllers/productController.js';

const router = express.Router();

router.route('/create').post(CreateProduct);
router.route('/').get(getProducts);
router.route('/search/:searchQuery').get(searchProducts);
router.route('/:id').get(getProductById);
router.route('/:id').post(updateProduct);
router.route('/:id').delete(deleteProduct);
router.route('/category/:category').get(getProductsByCategory);
router.route('/brand/:brand').get(getProductsByBrand);
router.route('/style/:style').get(getProductsByDressStyle);
router.route('/get-products-by/most-sell-count').get(getProductsByMostSellCount);
router.route('/most-rating').get(getProductsByMostRating);
router.route('/get-products-by/newarrivals').get(getProductsByNewArrivals);
router.route('/get-products-by/filter').post(getProductsByFilter);

export default router;
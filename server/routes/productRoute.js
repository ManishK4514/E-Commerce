import express from 'express';
import isAuthenticated from '../config/auth.js';
import { CreateProduct } from '../controllers/productController.js';

const router = express.Router();

router.route('/create').get(isAuthenticated, CreateProduct);

export default router;
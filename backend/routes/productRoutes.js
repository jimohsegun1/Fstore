import express from "express";
import formidable from "express-formidable";
import {
  addProduct,
  updateProductDetails,
  removeProduct,
  fetchProducts,
  fetchProductById,
  fetchAllProducts,
  addProductReview,
  fetchTopProducts,
  fetchNewProducts,
  filterProducts,
} from "../controllers/productController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId.js";

const router = express.Router();

router.get('/', fetchProducts); // 6 products in a page
router.post('/', authenticate, authorizeAdmin, formidable(), addProduct);
router.get('/allproducts', fetchAllProducts);
router.post('/:id/reviews', authenticate, checkId, addProductReview);
router.get('/top', fetchTopProducts);
router.get('/new', fetchNewProducts);
router.get('/:id', fetchProductById);
router.put('/:id', authenticate, authorizeAdmin, formidable(), updateProductDetails);
router.delete('/:id', authenticate, authorizeAdmin, removeProduct);
router.post('/filtered-products', filterProducts);

export default router;

import express from "express";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  countTotalOrders,
  calculateTotalSales,
  calcualteTotalSalesByDate,
  findOrderById,
  markOrderAsPaid,
  markOrderAsDelivered,
} from "../controllers/orderController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authenticate, createOrder);
router.get("/", authenticate, authorizeAdmin, getAllOrders);

router.get("/mine", authenticate, getUserOrders);
router.get("/total-orders", countTotalOrders);
router.get("/total-sales", calculateTotalSales);
router.get("/total-sales-by-date", calcualteTotalSalesByDate);

router.get("/:id", authenticate, findOrderById);
router.put("/:id/pay", authenticate, markOrderAsPaid);
router.put("/:id/deliver", authenticate, authorizeAdmin, markOrderAsDelivered);
export default router;

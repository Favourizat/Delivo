

import express from "express"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { createOrder, getMyOrders, getAdminOrders } from "../controllers/orderConrtoller.js"
import { adminMiddleware } from "../middleware/adminMiddleware.js"

const router = express.Router()

router.post("/", authMiddleware, createOrder)

router.get("/my-orders", authMiddleware, getMyOrders)

router.get("/admin/orders", authMiddleware, adminMiddleware, getAdminOrders)

// router.get()
// router.delete()
// router.put()

export default router;
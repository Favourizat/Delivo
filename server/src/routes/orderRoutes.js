

import express from "express"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { createOrder, getMyOrders, getAdminOrders } from "../controllers/orderConrtoller.js"
import { adminMiddleware } from "../middleware/adminMiddleware.js"
import { internalAuthMiddleware } from "../middleware/internalAuthMiddleware.js"

const router = express.Router()

router.post("/", authMiddleware, createOrder)

router.get("/my-orders", authMiddleware, getMyOrders)
router.get(
    "/internal/my-orders",
    internalAuthMiddleware,
    (req, res, next) => {
        req.user = {
             id: req.headers["x-user-id"],
        }
        next()
    },
    getMyOrders
)

router.post(
    "/internal",
    internalAuthMiddleware,
    (req, res, next) => {
        req.user = {
            id: req.headers["x-user-id"],
        }
        next()
    },
    createOrder
)

router.get("/admin/orders", authMiddleware, adminMiddleware, getAdminOrders)

// router.get()
// router.delete()
// router.put()

export default router;
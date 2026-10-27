
import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";
import {
    getOrderTracking,
    updateOrderStatus,
} from "../controllers/trackingController.js";
import { getAdminOrders } from "../controllers/orderConrtoller.js";
import { internalAuthMiddleware } from "../middleware/internalAuthMiddleware.js";

const router = express.Router();

// Admin updates an order's status
router.put(
    "/orders/:trackingId/status",
    authMiddleware,
    adminMiddleware,
    updateOrderStatus
);

// Internal tracking request from Next.js
router.get(
    "/internal/orders/:trackingId/tracking",
    internalAuthMiddleware,
    (req, res, next) => {
        req.user = {
            id: req.headers["x-user-id"],
        };
        next();
    },
    getOrderTracking
);

// Logged-in sender views their own tracking timeline
router.get(
    "/orders/:trackingId/tracking",
    authMiddleware,
    getOrderTracking
);

router.get("/admin/orders", authMiddleware, adminMiddleware, getAdminOrders);

export default router;

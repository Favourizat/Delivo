
import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";
import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import trackingRoutes from "./routes/trackingRoutes.js"
import geocodingRoutes from "./routes/geocodingRoutes.js"
import cookieParser from "cookie-parser";
import cors from "cors";

config();
connectDB();

const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))

// Middleware
app.use(express.json());
app.use(cookieParser())

// Routes
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes)
app.use("/api/tracking", trackingRoutes)
app.use("/api/geocoding", geocodingRoutes)

const PORT = 5001;

const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

// Handle unhandled promise rejections (eg database connection errors)
process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);

    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

// Handle Uncaught Exceptions
process.on("uncaughtException", async (err) => {
    console.error("Uncaught Exception:", err);

    await disconnectDB();
    process.exit(1);
});

// Graceful Shutdown
process.on("SIGTERM", async () => {
    console.log("SIGTERM received, shutting down gracefully");

    server.close(async () => {
        await disconnectDB();
        process.exit(0);
    });
});
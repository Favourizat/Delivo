
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import trackingRoutes from "./routes/trackingRoutes.js";
import geocodingRoutes from "./routes/geocodingRoutes.js";

const app = express();

const allowedOrigins = [
    "http://localhost:3000",
    process.env.CLIENT_URL,
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({ message: "Delivo API is running" });
});

app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tracking", trackingRoutes);
app.use("/api/geocoding", geocodingRoutes);

export default app;

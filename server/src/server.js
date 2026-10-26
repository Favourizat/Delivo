
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import trackingRoutes from "./routes/trackingRoutes.js";
import geocodingRoutes from "./routes/geocodingRoutes.js";

const app = express();

const allowedOrigins = [
    "https://delivo-gamma.vercel.app",
    "http://localhost:3000",
];

const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Delivo API is running",
    });
});

app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tracking", trackingRoutes);
app.use("/api/geocoding", geocodingRoutes);

export default app;


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Delivo API is running on port ${PORT}`);
});

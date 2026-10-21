
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

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header, such as server-to-server requests.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked origin: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


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

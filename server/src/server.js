
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";
import app from "./app.js";

config();

const PORT = process.env.PORT || 5001;

const startServer = async () => {
    await connectDB();

    const server = app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });

    process.on("SIGTERM", async () => {
        server.close(async () => {
            await disconnectDB();
            process.exit(0);
        });
    });
};

startServer().catch((error) => {
    console.error("Failed to start server:", error);
    process.exitCode = 1;
});

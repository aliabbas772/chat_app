import express from "express";
import dotenv from "dotenv/config";
import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/messages.route.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

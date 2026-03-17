import path from "path";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

export default app;
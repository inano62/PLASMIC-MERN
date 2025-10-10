import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN ?? "*" }));

app.get("/health", (_req, res) => res.status(200).json({ ok: true }));

const uri = process.env.MONGO_URI ?? "mongodb://mongo:27017/mern";
await mongoose.connect(uri);

app.get("/api/hello", (_req, res) => res.json({ message: "Hello MERN!" }));

const port = process.env.PORT ?? 5000;
app.listen(port, () => console.log(`API on :${port}`));

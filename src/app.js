import express from "express";
import mongoose from "mongoose";
import mocksRouter from "./routes/mocks.router.js";

const app = express();
app.use(express.json());

app.use("/api/mocks", mocksRouter); // <= requerido

export default app;

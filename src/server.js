import mongoose from "mongoose";
import app from "./app.js";

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/backend3";
const PORT = process.env.PORT || 3000;

try {
  await mongoose.connect(MONGO_URL);
  console.log(`MongoDB conectado: ${MONGO_URL}`);
  app.listen(PORT, () => console.log(`Escuchando en puerto ${PORT}`));
} catch (err) {
  console.error("Error al iniciar:", err);
  process.exit(1);
}
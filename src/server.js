import mongoose from "mongoose";
import app from "./app.js";

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/backend3";
const PORT = process.env.PORT || 3000;

await mongoose.connect(MONGO_URL);
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

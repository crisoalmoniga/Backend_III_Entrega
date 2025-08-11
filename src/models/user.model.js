import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, unique: true },
  age: Number,
  password: String,
  role: { type: String, enum: ["user", "admin"], default: "user" },
  pets: { type: [mongoose.Schema.Types.ObjectId], ref: "Pet", default: [] },
});
export const UserModel = mongoose.model("User", userSchema);

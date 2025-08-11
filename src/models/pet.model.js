import mongoose from "mongoose";
const petSchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ["dog", "cat", "bird", "fish", "other"] },
  adopted: { type: Boolean, default: false },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
});
export const PetModel = mongoose.model("Pet", petSchema);

import { PetModel } from "../models/pet.model.js";

export class PetsDAO {
  createMany(docs) { return PetModel.insertMany(docs, { ordered: false }); }
  findAll() { return PetModel.find({}, "name type adopted owner").lean(); }
  count() { return PetModel.countDocuments(); }
}

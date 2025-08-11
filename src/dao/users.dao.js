import { UserModel } from "../models/user.model.js";

export class UsersDAO {
  createMany(docs) { return UserModel.insertMany(docs, { ordered: false }); }
  findAll() { return UserModel.find({}, "first_name last_name email role pets").lean(); }
  count() { return UserModel.countDocuments(); }
}

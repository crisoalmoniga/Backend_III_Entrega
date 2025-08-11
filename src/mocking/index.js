import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

const HASHED = bcrypt.hashSync("coder123", 10);
const oid = () => new mongoose.Types.ObjectId();

export const generateMockUsers = (n = 50) =>
  Array.from({ length: n }, () => {
    const first = faker.person.firstName();
    const last = faker.person.lastName();
    return {
      _id: oid(),
      first_name: first,
      last_name: last,
      email: faker.internet.email({ firstName: first, lastName: last }).toLowerCase(),
      age: faker.number.int({ min: 18, max: 70 }),
      password: HASHED,
      role: Math.random() < 0.1 ? "admin" : "user",
      pets: [],
    };
  });

export const generateMockPets = (n = 50, owners = []) => {
  const types = ["dog", "cat", "bird", "fish", "other"];
  return Array.from({ length: n }, () => ({
    _id: oid(),
    name: faker.person.firstName(),
    type: faker.helpers.arrayElement(types),
    adopted: faker.datatype.boolean(),
    owner: owners.length ? faker.helpers.arrayElement(owners) : null,
  }));
};

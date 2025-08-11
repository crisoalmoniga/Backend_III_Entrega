import { PetsDAO } from "../dao/pets.dao.js";
import { generateMockPets } from "../mocking/index.js";

export class PetsService {
  constructor(dao = new PetsDAO()) { this.dao = dao; }

  async createManyFromMocks(n, ownerIds = []) {
    const docs = generateMockPets(n, ownerIds).map(({ _id, ...doc }) => doc);
    return this.dao.createMany(docs);
  }
  list() { return this.dao.findAll(); }
  count() { return this.dao.count(); }
}

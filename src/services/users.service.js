import { UsersDAO } from "../dao/users.dao.js";
import { generateMockUsers } from "../mocking/index.js";

export class UsersService {
  constructor(dao = new UsersDAO()) { this.dao = dao; }

  async createManyFromMocks(n) {
    const docs = generateMockUsers(n).map(({ _id, ...doc }) => doc);
    return this.dao.createMany(docs);
  }
  list() { return this.dao.findAll(); }
  count() { return this.dao.count(); }
}

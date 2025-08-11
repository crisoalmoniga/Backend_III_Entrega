import { generateMockUsers, generateMockPets } from "../mocking/index.js";
import { UsersService } from "./users.service.js";
import { PetsService } from "./pets.service.js";

export class MocksService {
  constructor(usersSvc = new UsersService(), petsSvc = new PetsService()) {
    this.usersSvc = usersSvc;
    this.petsSvc = petsSvc;
  }

  // Solo memoria (para /mockingusers y /mockingpets)
  generateUsersInMemory(n = 50) { return generateMockUsers(n); }
  generatePetsInMemory(n = 50) { return generateMockPets(n); }

  // Inserción real (para /generateData)
  async generateAndInsert({ users = 0, pets = 0 }) {
    let createdUsers = [];
    if (users > 0) createdUsers = await this.usersSvc.createManyFromMocks(users);

    let createdPets = [];
    if (pets > 0) {
      const ownerIds = createdUsers.map(u => u._id);
      createdPets = await this.petsSvc.createManyFromMocks(pets, ownerIds);
    }
    return { users: createdUsers.length, pets: createdPets.length };
  }
}

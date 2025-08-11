import { Router } from "express";
import { generateMockUsers, generateMockPets } from "../mocking/index.js";
import { UserModel } from "../models/user.model.js";
import { PetModel } from "../models/pet.model.js";

const router = Router();

/** GET /api/mocks/mockingpets (migrado) – solo genera en memoria */
router.get("/mockingpets", (req, res) => {
  const n = Number(req.query.n ?? 50);
  if (!Number.isFinite(n) || n <= 0) return res.status(400).json({ error: "n inválido" });
  return res.json({ status: "success", payload: generateMockPets(n) });
});

/** GET /api/mocks/mockingusers – genera 50 usuarios estilo Mongo, sin insertar */
router.get("/mockingusers", (_req, res) => {
  return res.json({ status: "success", payload: generateMockUsers(50) });
});

/** POST /api/mocks/generateData – inserta en DB users y pets */
router.post("/generateData", async (req, res) => {
  try {
    const usersN = Number(req.body.users ?? 0);
    const petsN = Number(req.body.pets ?? 0);
    if (!Number.isFinite(usersN) || usersN < 0) return res.status(400).json({ error: "users inválido" });
    if (!Number.isFinite(petsN) || petsN < 0) return res.status(400).json({ error: "pets inválido" });

    let createdUsers = [];
    if (usersN > 0) {
      const toInsert = generateMockUsers(usersN).map(({ _id, ...doc }) => doc);
      createdUsers = await UserModel.insertMany(toInsert, { ordered: false });
    }

    let createdPets = [];
    if (petsN > 0) {
      const ownerIds = createdUsers.map(u => u._id);
      const toInsert = generateMockPets(petsN, ownerIds).map(({ _id, ...doc }) => doc);
      createdPets = await PetModel.insertMany(toInsert, { ordered: false });
    }

    res.status(201).json({ status: "success", inserted: { users: createdUsers.length, pets: createdPets.length } });
  } catch (e) {
    res.status(500).json({ status: "error", error: e.message });
  }
});

export default router;

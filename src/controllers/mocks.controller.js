import { MocksService } from "../services/mocks.service.js";
const svc = new MocksService();

export const mockingPets = (req, res) => {
  const n = Number(req.query.n ?? 50);
  if (!Number.isFinite(n) || n <= 0) return res.status(400).json({ error: "n inválido" });
  res.json({ status: "success", payload: svc.generatePetsInMemory(n) });
};

export const mockingUsers = (_req, res) => {
  res.json({ status: "success", payload: svc.generateUsersInMemory(50) });
};

export const generateData = async (req, res) => {
  try {
    const users = Number(req.body.users ?? 0);
    const pets = Number(req.body.pets ?? 0);
    if (!Number.isFinite(users) || users < 0) return res.status(400).json({ error: "users inválido" });
    if (!Number.isFinite(pets) || pets < 0) return res.status(400).json({ error: "pets inválido" });

    const inserted = await svc.generateAndInsert({ users, pets });
    res.status(201).json({ status: "success", inserted });
  } catch (e) { res.status(500).json({ status: "error", error: e.message }); }
};

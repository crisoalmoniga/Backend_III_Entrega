import { PetsService } from "../services/pets.service.js";
const svc = new PetsService();

export const listPets = async (_req, res) =>
  res.json({ status: "success", payload: await svc.list() });

export const countPets = async (_req, res) =>
  res.json({ status: "success", total: await svc.count() });

import { UsersService } from "../services/users.service.js";
const svc = new UsersService();

export const listUsers = async (_req, res) =>
  res.json({ status: "success", payload: await svc.list() });

export const countUsers = async (_req, res) =>
  res.json({ status: "success", total: await svc.count() });

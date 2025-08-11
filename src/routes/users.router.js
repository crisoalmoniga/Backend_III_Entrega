import { Router } from "express";
import { listUsers, countUsers } from "../controllers/users.controller.js";
const router = Router();
router.get("/", listUsers);
router.get("/count", countUsers);
export default router;

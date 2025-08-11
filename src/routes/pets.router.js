import { Router } from "express";
import { listPets, countPets } from "../controllers/pets.controller.js";
const router = Router();
router.get("/", listPets);
router.get("/count", countPets);
export default router;

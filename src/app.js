import express from "express";
import mocksRouter from "./routes/mocks.router.js";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";

const app = express();
app.use(express.json());

app.use("/api/mocks", mocksRouter);
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);

export default app;

import { Router } from "express";

import UserController from "./controllers/UserController";

const routes = new Router();

routes.post("/users", UserController.create);
routes.put("/users", UserController.update);
routes.delete("/users/:id", UserController.delete);
routes.get("/users/:id", UserController.getUser);

export default routes;

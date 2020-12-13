import { Router } from "express";

import UserController from "./controllers/UserController";
import RecipeController from "./controllers/RecipeController";

const routes = new Router();

routes.post("/users", UserController.create);
routes.put("/users", UserController.update);
routes.delete("/users/:id", UserController.delete);
routes.get("/users/:id", UserController.getUser);

routes.post("/recipes", RecipeController.create);
routes.put("/recipes", RecipeController.update);
routes.delete("/recipes/:id", RecipeController.delete);
routes.get("/recipes/:slug", RecipeController.getRecipe);
routes.get("/recipes/", RecipeController.getRecipes);

export default routes;

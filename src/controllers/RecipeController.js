import Recipe from "../models/Recipe";

class RecipeController {
  create = async (req, res) => {
    try {
      const { img, title, time, description, user } = req.body;

      const recipe = await Recipe.create({
        img,
        title,
        time,
        description,
        user,
      });

      return res.status(200).send(recipe);
    } catch (error) {
      return res.status(400).send({ message: "Erro ao criar Receita" });
    }
  };

  update = async (req, res) => {
    try {
      const { id, img, title, time, description, user } = req.body;

      const recipe = await Recipe.findOneAndUpdate(id, {
        img,
        title,
        time,
        description,
        user,
      });

      return res.status(200).send(recipe);
    } catch (error) {
      return res.status(400).send({ message: "Erro ao atualizar Receita" });
    }
  };

  getRecipes = async (req, res) => {
    try {
      const { id } = req.body;
      let recipes;

      if (id) {
        recipes = await Recipe.find({ user: id }, (response) => {
          return response;
        });
      } else {
        recipes = await Recipe.find({}, (response) => {
          return response;
        });
      }

      return res.status(200).send(recipes);
    } catch (error) {
      return res.status(400).send({ message: "Erro ao pegar Receitas" });
    }
  };

  getRecipe = async (req, res) => {
    try {
      const { id } = req.params;

      const recipe = await Recipe.findById(id);

      return res.status(200).send(recipe);
    } catch (error) {
      return res.status(400).send({ message: "Erro ao achar Receita" });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;

      const recipe = await Recipe.findOneAndDelete({ _id: id });

      return res.status(200).send(recipe);
    } catch (error) {
      return res.status(400).send({ message: "Erro ao apagar Receita" });
    }
  };
}

export default new RecipeController();

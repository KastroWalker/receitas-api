const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./database");

const app = express();

const Recipe = require("./models/Recipe");

const port = 3000;

connection
  .authenticate()
  .then(() => {
    console.log("successful connection");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());
app.use(bodyParser.json());

app.get("/receitas", (req, res) => {
  Recipe.findAll({
    raw: true,
    order: [["id", "DESC"]],
  })
    .then((recipes) => {
      res.status(200).send({
        recipes,
      });
    })
    .catch(() => {
      res.status(400).send({
        message: "Error searching for recipes",
      });
    });
});

app.get("/receitas/:id", (req, res) => {
  const { id } = req.params;

  Recipe.findOne({
    where: {
      id,
    },
  })
    .then((recipe) => {
      if (recipe) {
        res.status(200).send({
          recipe,
        });
      } else {
        res.status(404).send({
          message: "Recipe not found",
        });
      }
    })
    .catch(() => {
      res.status(400).send({
        message: "Error searching for recipe",
      });
    });
});

app.post("/receitas", (req, res) => {
  const { img, titulo, tempo, description } = req.body;

  Recipe.create({
    img,
    titulo,
    tempo,
    description,
  })
    .then((response) => {
      res.status(200).send({
        recipe: response.dataValues,
        message: "Recipe successfully created",
      });
    })
    .catch(() => {
      res.status(400).send({
        message: "Error creating recipe",
      });
    });
});

app.put("/receitas/:id", (req, res) => {
  const { id } = req.params;

  const { img, titulo, tempo, description } = req.body;

  Recipe.update(
    {
      img,
      titulo,
      tempo,
      description,
    },
    {
      where: {
        id,
      },
    }
  )
    .then((recipe) => {
      if (recipe) {
        res.status(200).send({
          recipe: "Retornar os dados da receita",
          message: "Recipe successfully updated",
        });
      } else {
        res.status(404).send({
          message: "Recipe not found",
        });
      }
    })
    .catch(() => {
      res.status(400).send({
        message: "Error updating recipe",
      });
    });
});

app.delete("/receitas/:id", (req, res) => {
  const { id } = req.params;

  Recipe.destroy({
    where: {
      id,
    },
  })
    .then((response) => {
      if (response) {
        res.status(200).send({
          message: "Recipe successfully deleted",
        });
      } else {
        res.status(404).send({
          message: "Recipe not found",
        });
      }
    })
    .catch(() => {
      res.status(400).send({
        message: "Error deleting recipe",
      });
    });
});

app.listen(process.env.PORT || port, (error) => {
  if (error) {
    console.log("Error when running the server");
  } else {
    console.log(`Server running at http://127.0.0.1:${port}`);
  }
});

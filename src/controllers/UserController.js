import { hash } from "bcryptjs";
import User from "../models/User";

class UserController {
  create = async (req, res) => {
    try {
      const { name, email, username, password } = req.body;

      const passwordCrypt = await hash(password, 8);

      const user = await User.create({
        name,
        email,
        username,
        password: passwordCrypt,
      });

      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).send({ message: "Erro ao criar Usuário" });
    }
  };

  update = async (req, res) => {
    try {
      const { id, name, email, username, password } = req.body;

      const passwordCrypt = await hash(password, 8);

      const user = await User.findOneAndUpdate(id, {
        name,
        email,
        username,
        password: passwordCrypt,
      });

      return res.send(user);
    } catch (error) {
      return res.status(400).send({ message: "Erro ao atualizar Usuário" });
    }
  };

  getUser = async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findById(id);

      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).send({ message: "Erro ao achar Usuário" });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findOneAndDelete({ _id: id });

      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).send({ message: "Erro ao apagar Usuário" });
    }
  };
}

export default new UserController();

import { hash } from "bcryptjs";
import User from "../models/User";

class UserController {
  create = async (req, res) => {
    const { name, email, username, password } = req.body;

    const passwordCrypt = await hash(password, 8);

    const user = await User.create({
      name,
      email,
      username,
      password: passwordCrypt,
    });

    return res.status(200).send(user);
  };

  update = async (req, res) => {
    const { id, name, email, username, password } = req.body;

    const passwordCrypt = await hash(password, 8);

    const user = await User.findOneAndUpdate(id, {
      name,
      email,
      username,
      password: passwordCrypt,
    });

    return res.send(user);
  };

  getUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);

    return res.status(200).send(user);
  };

  delete = async (req, res) => {
    const { id } = req.params;

    const user = await User.findOneAndDelete({ _id: id });

    return res.status(200).send(user);
  };
}

export default new UserController();

import { compare } from "bcryptjs";
import dotenv from "dotenv";
import { sign } from "jsonwebtoken";
import User from "../models/User";

class SessionController {
  constructor() {
    dotenv.config();
  }

  create = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({
      username,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    const matchPaswword = await compare(password, user.password);

    if (!matchPaswword) {
      return res.status(404).json({ error: "Incorrect password" });
    }

    const token = sign({}, process.env.KEY_TOKEN, {
      subject: user._id.toString(),
      expiresIn: "1d",
    });

    return res.json({
      token,
      user,
    });
  };
}

export default new SessionController();

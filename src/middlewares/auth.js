import { verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "User not authorization" });
  }

  const [, token] = authHeader.split(" ");

  try {
    verify(token, process.env.KEY_TOKEN);
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid Jwt Token" });
  }
};

import mongoose from "mongoose";
import dotenv from "dotenv";
import { transports, createLogger, format } from "winston";

class Connection {
  constructor() {
    dotenv.config();

    this.logger = createLogger({
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
      defaultMeta: { service: "user-service" },
      transports: [
        new transports.File({
          filename: "logs/error.log",
          level: "error",
        }),
        new transports.File({ filename: "logs/combined.log" }),
      ],
    });

    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log("Success connecting to the database");
        this.logger.log({
          level: "info",
          message: "Conectado com sucesso",
        });
      })
      .catch((error) => {
        console.log("Erro ao se conectar com o banco");
        console.log(error);
        this.logger.log({
          level: "error",
          message: "Erro ao conectar",
        });
      });
  }
}

export default new Connection();

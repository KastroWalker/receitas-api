import mongoose from "mongoose";
import dotenv from "dotenv";

class Connection {
  constructor() {
    dotenv.config();

    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Conectado com sucesso");
      })
      .catch((error) => {
        console.log("Erro ao se conectar com o banco");
        console.log(error);
      });
  }
}

export default new Connection();

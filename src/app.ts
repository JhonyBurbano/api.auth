process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.APP_ENV = process.env.APP_ENV || "development";

// env files
import dotenv from "dotenv";

dotenv.config({
  path: `${__dirname}/../config/${process.env.APP_ENV}.env`,
});

console.log(process.env.APP_FOO);
import express from "express";

const app: express.Application = express();

app.get("/", (req, res) => {
  res.send("Hola mundo dddd...");
});

export { app };

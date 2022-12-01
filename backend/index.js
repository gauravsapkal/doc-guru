import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { login, register } from "./controllers/user.controller.js";
import { connect } from "./database/db.js";
// require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());


app.post("/register", register);
app.post("/login", login);

connect().then(() => {
  app.listen(8080, () => {
    console.log(`Listening on http://localhost:8080`);
  });
});
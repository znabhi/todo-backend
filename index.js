import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import connectionDB from "./DB/connection.js";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();

const app = express();
// app.use(cors)
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

connectionDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

import todoRouter from "./src/routes/todo.route.js";

app.use("/api/v1/todo", todoRouter);

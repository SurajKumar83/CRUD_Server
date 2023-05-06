// const express = require("express"); this was the earlier method of calling express
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser"; //use to handle post api

import Connection from "./datatbase/db.js";
import Routes from "./routes/route.js";
const app = express();

dotenv.config();
app.use(cors()); //allow front to request backend

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); // when we leave some spaces then to by default it getfilled by some numbers so to decode the actuall url we need to true the extended of urlencoded

app.use("/", Routes);
const PORT = process.env.PORT || 8000;
const URL = process.env.URL;

Connection(URL);

app.listen(PORT, () => console.log(`Server is runnning on Port ${PORT}`));

require("dotenv").config();
require("colors");
const cors = require("cors");

const express = require("express");

const connectDB = require("./dbinit.js");
const ingredients = require("./api/ingredients");
const categories = require("./api/categories");
const recipes = require("./api/recipes");

const server = express();
const PORT = process.env.PORT || 5000;

connectDB();

server.use(cors());

server.use(express.json());
server.get("/", (req, res) => res.send("Welcome to Foodbot!"));
server.use("/ingredients", ingredients);
server.use("/categories", categories);
server.use("/recipes", recipes);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

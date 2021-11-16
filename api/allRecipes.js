const express = require("express");

const { getAllRecipes, getAllRecipe } = require("../controllers/allRecipes");

const api = express.Router();

api.route("/").get(getAllRecipes);

api.route("/:id").get(getAllRecipe);

module.exports = api;

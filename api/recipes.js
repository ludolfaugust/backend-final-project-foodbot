const express = require("express");

const { getRecipes, getRecipe } = require("../controllers/recipes");

const api = express.Router();

api.route("/").get(getRecipes);

api.route("/:id").get(getRecipe);

module.exports = api;

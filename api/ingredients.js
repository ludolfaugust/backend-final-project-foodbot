const express = require("express");

const { getIngredients, getIngredient } = require("../controllers/ingredients");

const api = express.Router();

api.route("/").get(getIngredients);

api.route("/:id").get(getIngredient);

module.exports = api;

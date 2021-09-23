const express = require("express");

const { getCategories, getCategory } = require("../controllers/categories");

const api = express.Router();

api.route("/").get(getCategories);

api.route("/:id").get(getCategory);

module.exports = api;

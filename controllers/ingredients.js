const Ingredient = require("../models/Ingredient");

const getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find().populate("category");
    console.log(ingredients);
    res.json({
      success: true,
      data: ingredients,
      msg: "show all ingredients",
    });
  } catch (err) {
    console.log(err);
  }
};

const getIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const ingredient = await Ingredient.findById(id);

    res.json({
      msg: `show Ingredient with id ${id}`,
      success: true,
      data: ingredient,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getIngredients,
  getIngredient,
};

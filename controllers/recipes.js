const mongoose = require("mongoose");

const Recipe = require("../models/Recipe");
const { ObjectId } = mongoose.Types;

// const ingredients = [
//  ObjectId('614aecae45d87d639b1d336b'),
//  ObjectId('614aeeb345d87d639b1d3373'),
//  ObjectId('614b12c4bfbe29d357515c64'),
//  ObjectId('614b12cfbfbe29d357515c66'),
//  ObjectId('614b13f2bfbe29d357515c6d')
// ObjectId("614b18cebfbe29d357515c79"),
// ObjectId('614b132fbfbe29d357515c69'),
// ObjectId('614b14bebfbe29d357515c76'),
// ObjectId('6154815775d7087ddffe10b2'),
// ObjectId('615481b075d7087ddffe10b3'),
// ObjectId('614af0b345d87d639b1d3379'),
// ObjectId('6154859c75d7087ddffe10b8'),
// ObjectId("6154866b75d7087ddffe10b9")
// ]

const getRecipes = async (req, res) => {
  try {
    const ingredients = req.query.ingredients
      .split(",")
      .map((el) => ObjectId(el));

    const recipes = await Recipe.find({
      ingredients: {
        $not: { $elemMatch: { ingredient: { $nin: ingredients } } },
      },
    }).populate({
      path: "ingredients",
      populate: "ingredient",
    });

    res.json({
      success: true,
      data: recipes,
      msg: "show all recipes",
    });
  } catch (err) {
    res.json({
      success: false,
      msg: "enter list of ingredients",
    });
  }
};

const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);

    res.json({
      msg: `show Recipe with id ${id}`,
      success: true,
      data: Recipe,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRecipes,
  getRecipe,
};

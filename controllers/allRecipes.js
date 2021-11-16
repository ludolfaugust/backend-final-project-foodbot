const AllRecipe = require("../models/AllRecipe");

const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await AllRecipe.find();
    console.log(allRecipes);
    res.json({
      success: true,
      data: allRecipes,
      msg: "show all allRecipes",
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const allRecipe = await AllRecipe.findById(id);

    res.json({
      msg: `show AllRecipe with id ${id}`,
      success: true,
      data: allRecipe,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllRecipes,
  getAllRecipe,
};

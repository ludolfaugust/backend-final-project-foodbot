const Category = require("../models/Category");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    console.log(categories);
    res.json({
      success: true,
      data: categories,
      msg: "show all categories",
    });
  } catch (err) {
    console.log(err);
  }
};

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    res.json({
      msg: `show Category with id ${id}`,
      success: true,
      data: category,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCategories,
  getCategory,
};

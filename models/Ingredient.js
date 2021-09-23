const mongoose = require("mongoose");

const { Schema } = mongoose;

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a Ingredient name"],
    maxlength: [500, "max 500 chars are allowed"],
  },

  unit: {
    type: String,
    required: [true, "Please add a Unit name"],
    maxlength: [500, "max 500 chars are allowed"],
  },

  category: {
    type: Schema.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Ingredient", IngredientSchema);

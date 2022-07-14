const mongoose = require("mongoose");

const { Schema } = mongoose;

const AllrecipeSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a recipeName"],
    maxlength: [99, "max 50 chars are allowed for the recipeName"],
  },
  image: {
    type: String,
  },

  ingredients: [
    {
      quantity: {
        type: Number,
        required: true,
      },
      ingredient: {
        type: Schema.ObjectId,
        ref: "Ingredient",
      },
    },
  ],

  description: [
    {
      type: String,
      required: [true, "Please add a description"],
      maxlength: [5000, "max 50 chars are allowed for the description"],
    },
  ],
});

module.exports = mongoose.model("Allrecipe", AllrecipeSchema);

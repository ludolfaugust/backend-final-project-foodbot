const mongoose = require("mongoose");

const { Schema } = mongoose;

const CategorySchema = new Schema({
  Category: {
    type: String,
    required: [true, "Please add a Category"],
    maxlength: [500, "max 500 chars are allowed"],
  },
});

module.exports = mongoose.model("Category", CategorySchema);

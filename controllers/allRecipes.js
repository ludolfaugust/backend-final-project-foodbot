// const Allrecipe = require("../models/Allrecipe");

// const getAllrecipes = async (req, res) => {
//   try {
//     const allrecipes = await Allrecipe.find();
//     console.log(allrecipes);
//     res.json({
//       success: true,
//       data: allrecipes,
//       msg: "show all allrecipes",
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getAllrecipe = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const allrecipe = await Allrecipe.findById(id);

//     res.json({
//       msg: `show Allrecipe with id ${id}`,
//       success: true,
//       data: allrecipe,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = {
//   getAllrecipes,
//   getAllrecipe,
// };

const mongoose = require('mongoose');

// id, description, imagePath, name
const recipeSchema = mongoose.Schema({
  name: {type: String, required: false},
  description: {type: String, required: true},
  imagePath: {type: String, required: false}
});

module.exports = mongoose.model('Recipe',recipeSchema);


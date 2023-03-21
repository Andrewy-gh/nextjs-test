const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.models.Item || mongoose.model('Item', itemSchema);

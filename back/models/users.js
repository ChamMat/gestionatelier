const mongoose = require('mongoose');

const usersShema = mongoose.Schema({
  name: { type: String, required: true },
  admin: { type: Boolean, required: true },

});

module.exports = mongoose.model('Users', usersShema);
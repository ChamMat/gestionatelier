const mongoose = require('mongoose');

const chanelsShema = mongoose.Schema({
    name: { type: String , required: true},
    usersId: { type: Array, required: true}
});

module.exports = mongoose.model('Chanels', chanelsShema);
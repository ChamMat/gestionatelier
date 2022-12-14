const mongoose = require('mongoose');

const messagesShema = mongoose.Schema({
    
    chanel: { type: mongoose.Schema.ObjectId, required: true },
    users: { type: mongoose.Schema.ObjectId, required: true },
    messages: { type: String, required: true },
    date: { type: Date, required: true }
    
});

module.exports = mongoose.model('Messages', messagesShema);
const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    userID: String,
    username: String,
    connected: Boolean,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Chat' }],
});

module.exports = model('User', userSchema);


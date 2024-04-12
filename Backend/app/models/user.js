const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, required: true, enum: ['admin', 'lector', 'creador'] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
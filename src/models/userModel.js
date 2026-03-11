const mongoose = require('mongoose');
<<<<<<< HEAD
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true, // Validation: No duplicate emails
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [6, 'Password must be at least 6 characters'] // Validation
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'manager'], // RBAC Roles
    default: 'user'
  }
});


// Pre-save hook: Hash the password before saving to the database
userSchema.pre('save', async function () {
  // If password is not modified, skip hashing
  if (!this.isModified('password')) return;

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare passwords during login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

=======
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});
>>>>>>> 825265ba21dab3e1608cbd7d7e1cb52fb4320362
module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type:[String]
  }
});

userSchema.methods.generateHash = function(password) {
  return this.password = bcrypt.hashSync(password, 8);
};

userSchema.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.password);
};
const User = module.exports = mongoose.model ('User', userSchema);

// create new Admin user if there are no users in the collection
const newAdmin = function() {
  const adminData = { username: 'Admin', roles: ['admin']};
  const user = new User(adminData);
  user.generateHash('password');
  user.save();
};

User.find()
  .then(users => {
    if (users.length === 0) {
      newAdmin();
    }
  });

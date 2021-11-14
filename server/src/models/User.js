const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please insert a name."],
    maxlength: [30, "Names can't have more than 30 characters."],
  },
  email: {
    type: String,
    required: [true, "Please insert an email."],
    validate: [isEmail, "Please insert a valid email."]
  },
  password: {
    type: String,
    required: [true, "Please insert a password."],
    minlength: [6, "Passwords must have at least 6 characters."]
  }
});

// not using arrow functions to use "this" referring to the created document. 
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email: email });
  if( user ) {
    const auth = await bcrypt.compare(password, user.password);
    if(auth) {
      return user;
    }
    throw Error('Incorrect email or password.');
  }
  throw Error('Incorrect email or password.');
}

const User = mongoose.model('user', userSchema);




module.exports = User;
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

console.log();

const handleErrors = (err) => {
  let errors = { name: '', email: '', password: '' };

  if(err.message === 'Incorrect email or password.') {
    errors.email = 'Incorrect email or password.';
    errors.password = 'Incorrect email or password.';
    return errors;
  }

  // duplicate error
  if(err.code === 11000) {
    errors.email = 'Email is already registered.';
    return errors;
  }

  // validation errors
  if(err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    })
  }

  return errors;
}

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { 
    expiresIn: maxAge
  });
}

const signupPost = async (req, res) => {
  
  if(!req.body) {
    res.status(400).send('No body was submitted.');
    return;
  }

  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    const token = createToken(user._id);
    // console.log("User created successfully!");
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000});
    res.status(201).json({ token, user: user._id });

  } catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  
  }

}

const loginPost = async (req, res) => {

  if(!req.body) {
    res.status(400).send('No body was submitted.');
    return;
  }

  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000});
    res.status(201).json({token, user: user._id});
  } catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

}

const logoutGet = (req, res) => {
  res.cookie('jwt', '', {maxAge: 1});
  return;
}

const userInfoPost = (req, res) => {

  // if(!req.body) {
  //   res.status(400).send('No body was submitted.');
  //   return;
  // }


  const token = req.headers.authorization.replace('Bearer ', '');

  console.log(token);
  
  
  if(token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if(err) {
        res.status(401).send('Could not fetch user data: invalid token.');
        return;
      } else {
        let user = await User.findById(decodedToken.id);
        res.status(201).json({ name: user.name, email: user.email });
        return;
      }
    })
  } else {
    res.status(401).send('No token was sent.');
  }

}

module.exports = { signupPost, loginPost, logoutGet, userInfoPost };
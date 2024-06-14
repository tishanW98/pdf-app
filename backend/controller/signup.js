const bcrypt = require('bcrypt'); 
const User = require('../models/user.js');

async function signupUser(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, email, password:  hashedPassword });
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: savedUser });
    
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

module.exports = { signupUser };
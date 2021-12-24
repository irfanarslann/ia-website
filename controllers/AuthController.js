const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

const { validationResult } = require('express-validator');
const User = require('../model/User');
const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }

  const isMatched = bcrypt.compare(password, user.password);
  if (!isMatched) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }

  const payload = {
    user: {
      id: user.id,
    },
  };

  jwt.sign(
    payload,
    config.get('jwtSecret'),
    {
      expiresIn: 60000,
    },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
};

const loadUser = async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500);
  }
};

module.exports = { login, loadUser };

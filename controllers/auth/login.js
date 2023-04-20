const { Unauthorized } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../../models/users/users.model");
const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const { number, password } = req.body;
  const user = await User.findOne({ number });
  if (!user) {
    throw Unauthorized(`Number or password is wrong`);
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw Unauthorized(`Number or password is wrong`);
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    token,
    user: number,
  });
};

module.exports = login;

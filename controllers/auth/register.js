const bcrypt = require("bcryptjs");
const { Conflict } = require("http-errors");
const { User } = require("../../models/users.model");

const register = async (req, res) => {
  const { name, number, password, role } = req.body;
  const user = await User.findOne({ number });
  if (user) {
    throw new Conflict(`Number in use`);
  }
  const avatarURL =
    "https://res.cloudinary.com/dzigcvgtu/image/upload/v1682354181/avatars/ohsunxdb9nh2tuzo5cky.png";
  const hashPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10));
  let result;
  if (role === "Patient") {
    result = await User.create({
      name,
      number,
      password: hashPassword,
      role,
      avatarURL,
      patientStatus: "New",
    });
  } else {
    result = await User.create({
      name,
      number,
      password: hashPassword,
      role,
      avatarURL,
    });
  }

  const { password: pass, ...newUser } = result._doc;

  res.status(201).json(newUser);
};

module.exports = register;

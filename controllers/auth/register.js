const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { uuid } = require("uuidv4");
const { Conflict } = require("http-errors");
const { User } = require("../../models/users/users.model");

const register = async (req, res) => {
  const { name, number, password, role } = req.body;
  const user = await User.findOne({ number });
  if (user) {
    throw new Conflict(`Number in use`);
  }
  const avatarURL = gravatar.url(name);
  const hashPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10));
  const verificationToken = uuid();
  const result = await User.create({
    name,
    number,
    password: hashPassword,
    role,
    avatarURL,
    verificationToken,
  });

  res.status(201).json({
    user: {
      name: result.name,
      number: result.number,
      role,
      avatarURL,
      verificationToken,
    },
  });
};

module.exports = register;

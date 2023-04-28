const currentUser = async (req, res) => {
  const user = req.user;
  const { password, ...newUser } = user._doc;
  res.status(200).send(newUser);
};

module.exports = currentUser;

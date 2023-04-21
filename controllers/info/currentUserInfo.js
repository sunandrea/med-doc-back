const currentUser = async (req, res) => {
  const user = req.user;
  // const { name, phone, role } = user;
  res.status(200).send(user);
};

module.exports = currentUser;

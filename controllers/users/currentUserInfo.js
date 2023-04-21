const currentUser = async (req, res) => {
  try {
    const user = req.user;
    const { email, role } = user;
    res.status(200).send({ email, role });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

module.exports = {
  currentUser,
};

import { User } from "../../models/users/users.model";

const findUserByRole = async (req, res) => {
  try {
    const users = await User.find({ role: req.params.role });
    if (!users) {
      res.status(404).json({ message: "Not found" });
    } else {
      res.json(users);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findUserByRole,
};

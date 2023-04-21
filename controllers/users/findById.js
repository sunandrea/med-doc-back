import { User } from "../../models/users/users.model";

const findUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "Not found" });
    } else {
      res.json(user);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findUserById,
};

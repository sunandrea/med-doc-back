const services = require("../../services/index");

const logout = async (req, res, next) => {
  await services.logout(req.user.id);
  res.status(204).send();
};

module.exports = logout;

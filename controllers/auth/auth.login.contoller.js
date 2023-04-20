const services = require("../../services/index");

const login = async (req, res, next) => {
  const result = await services.login(req.body);
  res.status(201).json(result);
};

module.exports = login;

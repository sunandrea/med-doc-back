const errorFilter = (error, req, res, next) => {
  const { status = 500 } = error;
  res.status(status).json(error);
};

module.exports = errorFilter;

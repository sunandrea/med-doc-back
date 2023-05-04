const errorFilter = (error, req, res, next) => {
  // const { status = 500 } = error;
  res.status(500).json(error);
};

module.exports = errorFilter;

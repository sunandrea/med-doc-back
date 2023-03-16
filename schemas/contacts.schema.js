const joi = require("joi");

const contactAddSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  phone: joi.string().required(),
});

const contactUpdateSchema = joi.object({
  name: joi.string().optional(),
  email: joi.string().optional(),
  phone: joi.string().optional(),
});

module.exports = {
  contactAddSchema,
  contactUpdateSchema,
};

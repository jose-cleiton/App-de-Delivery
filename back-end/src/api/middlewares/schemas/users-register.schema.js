const joi = require('joi');

const userRegisterSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  name: joi.string().min(12).required(),
  role: joi.string(),
});

module.exports = { userRegisterSchema };

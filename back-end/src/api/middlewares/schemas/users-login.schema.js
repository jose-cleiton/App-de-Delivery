const joi = require('joi');

const userLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

module.exports = { userLoginSchema };

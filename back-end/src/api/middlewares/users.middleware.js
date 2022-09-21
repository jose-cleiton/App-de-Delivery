const { HttpException } = require('../errors/http-exception.error');
const { StatusCode } = require('../helpers/status-code.helper');
const { userLoginSchema } = require('./schemas/users-login.schema');
const { userRegisterSchema } = require('./schemas/users-register.schema');

class UserMiddleware {
  constructor() {
    this.code = StatusCode;

    this.loginValidate = this.loginValidate.bind(this);
    this.registerValidate = this.registerValidate.bind(this);
  }

  loginValidate(req, _res, next) {
    const { email, password } = req.body;

    const { error } = userLoginSchema.validate({ email, password });
    if (error) {
      throw new HttpException(this.code.BAD_REQUEST, error.message);
    }

    return next();
  }

  registerValidate(req, _res, next) {
    const { name, email, password } = req.body;

    const { error } = userRegisterSchema.validate({ name, email, password });
    if (error) {
      throw new HttpException(this.code.BAD_REQUEST, error.message);
    }

    return next();
  }
}

module.exports = { userMiddleware: new UserMiddleware() };

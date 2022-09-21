const { HttpException } = require('../errors/http-exception.error');
const { StatusCode } = require('../helpers/status-code.helper');
const { userLoginSchema } = require('./schemas/users-login.schema');

class UserMiddleware {
  constructor() {
    this.loginValidate = this.loginValidate.bind(this);
    this.code = StatusCode;
  }

  loginValidate(req, _res, next) {
    const { email, password } = req.body;

    const { error } = userLoginSchema.validate({ email, password });
    if (error) {
      throw new HttpException(this.code.BAD_REQUEST, error.message);
    }

    return next();
  }
}

module.exports = { userMiddleware: new UserMiddleware() };

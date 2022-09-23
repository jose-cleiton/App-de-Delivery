const { HttpException } = require('../errors/http-exception.error');
const { JwtHelper } = require('../helpers/jwt-helper');
const { StatusCode } = require('../helpers/status-code.helper');

class TokenAuthMiddleware {
  constructor() {
    this.codes = StatusCode;
  }

  async verify(req, _res, next) {
    const token = req.headers.authorization;

    if (!token) {
      throw new HttpException(this.codes.UNAUTHORIZED, 'Token not provided');
    }

    JwtHelper.verify(token);

    return next();
  }

  async decode(req, _res, next) {
    const token = req.headers.authorization;
     if (!token) {
      throw new HttpException(this.codes.UNAUTHORIZED, 'Token not provided');
    }
    const { id } = JwtHelper.verify(token);
    
    req.body.userId = { id };

    next();
  }
}

module.exports = { TokenAuthMiddleware };

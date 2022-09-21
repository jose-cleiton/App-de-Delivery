require('dotenv/config');
const jwt = require('jsonwebtoken');
const { HttpException } = require('../errors/http-exception.error');

class JwtHelper {
  static generate(tokenPayload) {
    const token = jwt.sign(tokenPayload, 'secret_key', {
      expiresIn: '100d',
    });

    return token;
  }

  static verify(token) {
    try {
      if (!token) throw new HttpException(401, 'Token not found');

      const tokenPayload = jwt.verify(token, 'secret_key');
      return tokenPayload;
    } catch (error) {
      throw new HttpException(401, 'Token must be a valid token');
    }
  }
}

module.exports = { JwtHelper };

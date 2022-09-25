require('dotenv/config');

const jwtKey = require('fs')
  .readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });
  
const jwt = require('jsonwebtoken');
const { HttpException } = require('../errors/http-exception.error');

class JwtHelper {
  static generate(tokenPayload) {
    const token = jwt.sign(tokenPayload, jwtKey, {
      expiresIn: '100d',
    });

    return token;
  }

  static verify(token) {
    try {
      const tokenPayload = jwt.verify(token, jwtKey);
      return tokenPayload;
    } catch (error) {
      throw new HttpException(401, 'Token must be a valid token');
    }
  }
}

module.exports = { JwtHelper };

const md5 = require('md5');
const { HttpException } = require('../errors/http-exception.error');

class HashHelper {
  static encoded(value) {
    try {
      const hash = md5(value);

      return hash;
    } catch (error) {
      throw new HttpException(500, 'Fail on encode');
    }
  }

  static decoded(value, hash) {
    try {
      const hashDecoded = md5(value);

      return hashDecoded === hash;
    } catch (error) {
      throw new HttpException(500, 'Fail on decoded');
    }
  }
}

module.exports = { HashHelper };

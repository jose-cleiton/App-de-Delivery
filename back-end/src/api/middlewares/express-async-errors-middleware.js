const { HttpException } = require('../errors/http-exception.error');

class ExpressAsyncErrorMiddleware {
  /**
   *
   * @param {Error} error
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  static handle(error, _req, res, next) {
    if (error instanceof HttpException) {
      res.status(error.status).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message || 'Internal server error' });
    }

    return next();
  }
}

module.exports = { ExpressAsyncErrorMiddleware };

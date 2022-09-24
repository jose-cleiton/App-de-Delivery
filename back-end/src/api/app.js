require('express-async-errors');

const express = require('express');
const cors = require('cors');

const {
  ExpressAsyncErrorMiddleware,
} = require('./middlewares/express-async-errors.middleware');

const { UsersRoute } = require('./routes/users.route');
const { ProductsRoute } = require('./routes/products.route');
const { SalesRoute } = require('./routes/sales-router');

class App {
  constructor() {
    this.PORT = process.env.PORT || 3001;
    this.app = express();

    this.config();
    this.watchingRoutes();
    this.startMiddlewares();
  }

  watchingRoutes() {
    this.app.use(new UsersRoute().router);
    this.app.use(new ProductsRoute().router);
    this.app.use(new SalesRoute().router);
  }

  // ignore
  config() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static('public'));
  }

  startMiddlewares() {
    this.app.use(ExpressAsyncErrorMiddleware.handle);
  }

  start() {
    this.app.listen(this.PORT, () => {
      console.log('🚀 Server started on port', this.PORT);
    });
  }
}

module.exports = { App };

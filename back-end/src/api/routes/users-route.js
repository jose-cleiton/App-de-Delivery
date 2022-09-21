const { Router } = require('express');
const { userMiddleware } = require('../middlewares/users.middleware');
const { UsersController } = require('../modules/users/users-controller');
const { UsersService } = require('../modules/users/users-service');

class UsersRoute {
  constructor() {
    this.path = '/users';
    /**
     * @type {import('../modules/users/users-controller').UsersController}
     */
    this.usersController = new UsersController(new UsersService());
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      '/login',
      userMiddleware.loginValidate,
      this.usersController.signIn,
    );
    this.router.post(
      '/register',
      userMiddleware.registerValidate,
      this.usersController.register,
    );
  }
}

module.exports = { UsersRoute };

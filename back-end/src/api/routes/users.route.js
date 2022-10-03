const { Router } = require('express');
const { userMiddleware } = require('../middlewares/users.middleware');
const { UsersController } = require('../modules/users/users-controller');
const { UsersService } = require('../modules/users/users-service');
const { TokenAuthMiddleware } = require('../middlewares/token-auth.middleware');

class UsersRoute {
  constructor() {
    this.path = '/users';
    /**
     * @type {import('../modules/users/users-controller').UsersController}
     */
    this.usersController = new UsersController(new UsersService());
    this.router = Router();
    this.tokenMdwr = new TokenAuthMiddleware();
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
    this.router.get(
      '/sellers',
      this.usersController.getSellers,
    );
    this.router.get('/userList',
    this.tokenMdwr.verify,
    this.usersController.getAllUsers,
    );

    this.router.delete(`${this.path}/:id`,
    this.tokenMdwr.verify,
    this.usersController.deleteUser,
    );

    this.router.post(`${this.path}`,
    this.tokenMdwr.verify,
    this.usersController.createSellerOrAdmin,
    );
  }
}

module.exports = { UsersRoute };

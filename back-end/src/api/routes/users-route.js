const { Router } = require('express');
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
    this.router.get(`${this.path}`, this.usersController.signIn);
  }
}

module.exports = { UsersRoute };

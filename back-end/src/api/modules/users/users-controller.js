class UsersController {
  constructor(service) {
    /**
     * @type {import('./users-service').UsersService}')}
     */
    this.usersService = service;

    this.signIn = this.signIn.bind(this);
  }

  async signIn(req, res) {
    const users = await this.usersService.signIn();
    return res.json(users);
  }
}

module.exports = { UsersController };

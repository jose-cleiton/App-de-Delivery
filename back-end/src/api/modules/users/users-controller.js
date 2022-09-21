class UsersController {
  constructor(service) {
    /**
     * @type {import('./users-service').UsersService}')}
     */
    this.usersService = service;

    this.signIn = this.signIn.bind(this);
    this.register = this.register.bind(this);
  }

  async signIn(req, res) {
    const { email, password } = req.body;

    const token = await this.usersService.signIn(email, password);
    return res.json({ token });
  }

  async register(req, res) {
    const { name, email, password } = req.body;

    const token = await this.usersService.register(name, email, password);

    return res.status(201).json({ token });
  }
}

module.exports = { UsersController };

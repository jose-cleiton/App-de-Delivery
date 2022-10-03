class UsersController {
  constructor(service) {
    /**
     * @type {import('./users-service').UsersService}')}
     */
    this.usersService = service;

    this.signIn = this.signIn.bind(this);
    this.register = this.register.bind(this);
    this.getSellers = this.getSellers.bind(this);
    this.createSellerOrAdmin = this.createSellerOrAdmin.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  async signIn(req, res) {
    const { email, password } = req.body;
    const result = await this.usersService.signIn(email, password);
    return res.json(result);
  }

  async register(req, res) {
    const { name, email, password } = req.body;
    const result = await this.usersService.register(name, email, password);
    return res.status(201).json(result);
  }

  async getSellers(req, res) {
    const result = await this.usersService.getSellers();
    return res.json(result);
  }

  async getAllUsers(req, res) {
    const result = await this.usersService.getAllUsers();
    return res.status(200).json(result)
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    const result = await this.usersService.deleteUser(Number(id));
    return res.status(200).json(result);
  }

  async createSellerOrAdmin(req, res) {
    const { name, email, password, role} = req.body;
    const newUser = await this.usersService.createSellerOrAdmin(name, email, password, role);
    return res.status(201).json(newUser);
  }
}

module.exports = { UsersController };

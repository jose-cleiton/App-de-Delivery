const { Op } = require('sequelize');
const { UserModel } = require('../../../database/models/users');
const { HttpException } = require('../../errors/http-exception.error');

const { HashHelper } = require('../../helpers/hash-helper');
const { JwtHelper } = require('../../helpers/jwt-helper');

class UsersService {
  constructor() {
    /**
     * @type {import('sequelize/types/model').ModelCtor<import('sequelize/types/model').Model>}
     */
    this.usersRepository = UserModel;
  }

  async signIn(email, password) {
    const user = await this.usersRepository.findOne({
      where: { email },
      raw: true,
    });

    if (!user) {
      throw new HttpException(404, 'Not found');
    }

    const isPasswordValid = HashHelper.decoded(password, user.password);
    if (!isPasswordValid) throw new HttpException(401, 'Unauthorized');

    const payload = {
      id: user.id,
      role: user.role,
      name: user.name,
      email: user.email,
    };

    const token = JwtHelper.generate(payload);

    return { ...payload, token };
  }

  async register(name, email, password) {
    const alreadyExists = await this.usersRepository.findOne({
      where: { [Op.or]: [{ email }, { name }] },
    });

    if (alreadyExists) throw new HttpException(409, 'User already exists!');

    const hashedPassword = HashHelper.encoded(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    const payload = {
      id: user.id,
      role: user.role,
      name: user.name,
      email: user.email,
    };

    const token = JwtHelper.generate(payload);

    return { ...payload, token };
  }

  async getSellers() {
    const sellers = await this.usersRepository.findAll({ where: { role: 'seller' } });
    return sellers;
  }

  async getAllUsers() {
    const users = await this.usersRepository.findAll();
    return users;
  }

  async deleteUser(id) {
    await this.usersRepository.destroy({where: { id }})
    const users = await this.usersRepository.findAll({ raw: true });
    console.log(users);
    return users;
  }

  async createSellerOrAdmin(name, email, password, role) {
    const alreadyExists = await this.usersRepository.findOne({
      where: { [Op.or]: [{ email }, { name }] },
    });

    if (alreadyExists) throw new HttpException(409, 'User already exists!');

    const hashedPassword = HashHelper.encoded(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return user;
  }
}

module.exports = { UsersService };
